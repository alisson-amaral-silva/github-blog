import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  input {
    margin-top: 0.75rem;
    flex: 1;
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
  }
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
