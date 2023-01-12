import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;
  width: 26rem;
  height: 16.25rem;
  cursor: pointer;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 2rem;
    width: 15rem;
  }

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
`
