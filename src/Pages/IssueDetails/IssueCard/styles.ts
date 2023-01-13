import styled from 'styled-components'
import media from 'styled-media-query'

export const IssueDetailsContainer = styled.div`
  width: 100%;
  height: 10.5rem;

  ${media.lessThan('small')`
    height: 18.5rem;
  `}

  display: flex;
  background: ${(props) => props.theme['base-profile']};
  gap: 2rem;
  margin-top: -5rem;
  border-radius: 10px;

  ${media.between('small', 'large')`
      margin-top: 2rem;
  `}
`

export const Content = styled.div`
  padding: 2rem;
  width: 100%;
  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 1.95rem;
    margin-top: 1.25rem;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  strong {
    font-size: 0.75rem;
    line-height: 1.2rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
  }

  a {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
    line-height: 1.2rem;
    text-decoration: none;

    svg {
      margin-left: 0.5rem;
    }
  }
`

export const Biography = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
  line-height: 1.6rem;
  margin-top: 0.5rem;
`

export const Footer = styled.div`
  display: flex;
  gap: 1.938rem;
  margin-top: 1.5rem;
  height: 26px;

  ${media.lessThan('small')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}
`

export const Info = styled.div`
  display: flex;
  gap: 0.531rem;
  justify-content: center;
  span {
    font-size: 1rem;
    line-height: 1.6rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme['base-label']};
    margin-top: 0.2rem;
  }
`

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
`
