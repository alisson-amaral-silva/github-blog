import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2.5rem;
  padding: 2.5rem 2rem;
`

export const Content = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
`
