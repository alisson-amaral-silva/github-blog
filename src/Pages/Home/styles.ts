import styled from 'styled-components'

export const MainWrapper = styled.main`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export const EmptyList = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 2rem;
  }
  strong {
    color: ${(props) => props.theme.blue};

    font-size: 2rem;
  }
`
