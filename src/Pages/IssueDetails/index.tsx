import { useLocation, useParams } from 'react-router-dom'
import { IssueCard } from './IssueCard'
import { IssuesContext } from '../../contexts/IssuesContext'
import { useContext, useEffect, useState } from 'react'
import { Content, Container } from './styles'
import { NotFound } from '../NotFound'
import { LoadingWrapper } from './IssueCard/styles'
import { MoonLoader } from 'react-spinners'

export function IssueDetails() {
  const { issueId } = useParams()
  const { fetchIssueById, loading, issueDetails, error, errorMessage } =
    useContext(IssuesContext)

  useEffect(() => {
    fetchIssueById(Number(issueId))
  }, [fetchIssueById, issueId])

  if (loading)
    return (
      <LoadingWrapper>
        <MoonLoader color="#3294F8" />
      </LoadingWrapper>
    )

  return (
    <>
      {!issueId || !issueDetails || error ? (
        <NotFound message={errorMessage} />
      ) : (
        <>
          <IssueCard
            comments={issueDetails?.comments}
            createdDate={issueDetails?.createdAt}
            github={issueDetails?.githubUrl}
            title={issueDetails?.title}
            username={issueDetails?.user}
          />
          {issueDetails?.content && (
            <Container>
              <Content
                dangerouslySetInnerHTML={{
                  __html: issueDetails.content.replace(
                    /(?:\r\n|\r|\n)/g,
                    '<br>',
                  ),
                }}
              />
            </Container>
          )}
        </>
      )}
    </>
  )
}
