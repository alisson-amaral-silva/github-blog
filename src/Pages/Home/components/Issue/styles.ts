import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;
  width: 26rem;
  height: 16.25rem;
  ${media.lessThan('large')`
      width: 100%;
      height: 14.25rem;
  `}
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.85rem;
    line-height: 1.4rem;
  }
`

export const Content = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
  line-height: 1.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  ${media.lessThan('small')`
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  `}
`

export const LinkWrapper = styled.button`
  a:link {
    text-decoration: none;
  }
  &:link {
    text-decoration: none;
  }
  border: 0;
  background: transparent;
  width: 15rem;
  text-align: left;

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 2rem;
    &:hover {
      color: ${(props) => props.theme.blue};
      cursor: pointer;
    }
  }
`
