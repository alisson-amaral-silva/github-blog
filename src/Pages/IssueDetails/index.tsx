import { useLocation, useParams } from 'react-router-dom'
import { IssueCard } from './IssueCard'
import { IssuesContext } from '../../contexts/IssuesContext'
import { useContext, useEffect, useState } from 'react'
import { Content, Container } from './styles'
import { NotFound } from '../NotFound'
import { LoadingWrapper } from './IssueCard/styles'
import { MoonLoader } from 'react-spinners'
import { useGithubState } from '../../lib/github'
import { Issue } from '../../contexts/issue'

export function IssueDetails() {
  const { issueId } = useParams()

  const storedStateAsJSON = localStorage.getItem(
    '@github-glob:user-state-1.0.0',
  )
  const parsedJson = JSON.parse(storedStateAsJSON!)

  const { data, isFetching, error } = useGithubState(
    `repos/${parsedJson?.username}/${parsedJson?.repository}/issues/${issueId}`,
  )

  const issue = data as Issue

  if (isFetching)
    return (
      <LoadingWrapper>
        <MoonLoader color="#3294F8" />
      </LoadingWrapper>
    )

  return (
    <>
      {error ? (
        <NotFound />
      ) : (
        <>
          <IssueCard
            comments={issue?.comments}
            createdDate={issue?.created_at}
            github={issue?.html_url}
            title={issue?.title}
            username={issue?.user.login}
          />
          {issue?.body && (
            <Container>
              <Content
                dangerouslySetInnerHTML={{
                  __html: issue?.body.replace(/(?:\r\n|\r|\n)/g, '<br>'),
                }}
              />
            </Container>
          )}
        </>
      )}
    </>
  )
}
