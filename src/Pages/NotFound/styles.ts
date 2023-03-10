import styled from 'styled-components'
import media from 'styled-media-query'

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const Image = styled.img`
  height: 22.5rem;
  width: 29.75rem;

  ${media.lessThan('large')`
      padding: 2rem;
  `}
`

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  line-height: 3.9rem;
  color: ${(props) => props.theme['base-title']};
  ${media.lessThan('large')`
    text-align: center;
    font-size: 2.5rem;
  `}
`

export const ErrorMessage = styled.h1`
  text-align: center;
  font-size: 2rem;
  line-height: 3.9rem;
  color: ${(props) => props.theme['base-title']};
  ${media.lessThan('large')`
    text-align: center;
    font-size: 1.5rem;
  `}
`

export const Button = styled.button`
  margin-top: 1.5rem;
  font-weight: 700;
  font-size: 0.85rem;
  line-height: 1.4rem;
  text-transform: uppercase;

  background: transparent;
  border: 1px solid ${(props) => props.theme.blue};
  color: ${(props) => props.theme.blue};

  text-align: center;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  width: 23rem;
  height: 2.875rem;

  &:hover {
    background: ${(props) => props.theme.blue};
    border-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
  }
`
