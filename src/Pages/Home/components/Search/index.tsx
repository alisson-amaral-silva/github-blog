import { Header, SearchFormContainer } from './styles'

export function Search() {
  return (
    <SearchFormContainer>
      <Header>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </Header>
      <input placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
