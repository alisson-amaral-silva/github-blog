import styled from 'styled-components'
import media from 'styled-media-query'

export const SearchFormContainer = styled.form`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  ${media.lessThan('large')`
    margin-top: 0;
    padding: 2rem;
  `}
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.8rem;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.85rem;
    line-height: 1.4rem;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.lessThan('small')`
    flex-direction: column;
  `}

  ${media.lessThan('large')`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
  `}

  input {
    margin-top: 0.75rem;
    ${media.lessThan('large')`
      width: 100%;
    `}
    width: 15.5rem;
    height: 3.375rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    padding: 0.75rem 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  button {
    ${media.lessThan('small')`
      width: 100%;
    `}
    margin-top: 0.75rem;
    border: 0;
    padding: 1rem;
    height: 3.375rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme.blue};
    color: ${(props) => props.theme.blue};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    transition: background-color 0.5s, color 0.5s, border-color 0.5s;
    &:hover {
      background: ${(props) => props.theme.blue};
      border-color: ${(props) => props.theme.blue};
      color: ${(props) => props.theme.white};
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`
