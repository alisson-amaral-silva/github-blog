import { Header, SearchFormContainer } from './style'

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
