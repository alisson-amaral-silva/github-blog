import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  margin-top: 2.5rem;
  padding: 2.5rem 2rem;

  ${media.lessThan('small')`
      margin-top: 0;
  `}
`

export const Content = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
`
