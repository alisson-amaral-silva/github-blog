import { useLocation, useParams } from 'react-router-dom'
import { IssueCard } from './IssueCard'
import { IssuesContext } from '../../contexts/IssuesContext'
import { useContext, useEffect } from 'react'
import { Content, Container } from './styles'
import { NotFound } from '../NotFound'

export function IssueDetails() {
  const { issueId } = useParams()

  const { fetchIssueById, issueDetails } = useContext(IssuesContext)

  useEffect(() => {
    fetchIssueById(Number(issueId))
  }, [issueId])

  return (
    <>
      {!issueId || !issueDetails ? (
        <NotFound />
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
