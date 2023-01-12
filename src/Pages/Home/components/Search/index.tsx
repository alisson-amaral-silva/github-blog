import { Header, SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { IssuesContext } from '../../../../contexts/IssuesContext'
import { useContext } from 'react'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function Search() {
  const { issueQuantity } = useContext(IssuesContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInput) {
    const { query } = data
    console.log('query ', encodeURI(query))
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <Header>
        <strong>Publicações</strong>
        <span>{issueQuantity} publicações</span>
      </Header>
      <input
        type="text"
        disabled={isSubmitting}
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </SearchFormContainer>
  )
}
