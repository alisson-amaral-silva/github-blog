import styled from 'styled-components'
import media from 'styled-media-query'

export const ProfileContainer = styled.div`
  width: 100%;
  height: 13.25rem;

  display: flex;
  background: ${(props) => props.theme['base-profile']};

  gap: 2rem;
  margin-top: -5rem;
  border-radius: 6px;

  ${media.lessThan('small')`
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  `}

  ${media.lessThan('large')`
    margin-top: 2rem;
  `}
`

export const Image = styled.img`
  border-radius: 50%;
  padding: 2rem 0 2rem 2.5rem;
  ${media.lessThan('small')`
    display: none;
  `}
`

export const ProfileDetails = styled.div`
  padding: 2.5rem 2.5rem 1.938rem 0;
  ${media.lessThan('small')`
    padding: 0;
  `}
  width: 100%;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 1.5rem;
    line-height: 1.95rem;
    font-weight: 700;
  }

  a {
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
    line-height: 1.2rem;

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
