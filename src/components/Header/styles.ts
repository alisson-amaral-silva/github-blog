import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 18.5rem;
  background: #153351;
  ${media.lessThan('large')`
    height: 10.5rem
  `}
  a {
    margin-top: -1rem;
  }
`
