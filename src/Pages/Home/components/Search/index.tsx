import { Header, InputWrapper, SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { IssuesContext } from '../../../../contexts/IssuesContext'
import { useContext } from 'react'

const searchFormSchema = z.object({
  username: z.string().min(2, 'Informe o username'),
  repo: z.string().min(2, 'Informe o nome do repositorio'),
  issueName: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function Search() {
  const { issueQuantity, fetchIssues } = useContext(IssuesContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInput) {
    const { username, repo, issueName } = data
    fetchIssues(issueName, repo, username)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <Header>
        <strong>Publicações</strong>
        <span>{issueQuantity} publicações</span>
      </Header>
      <InputWrapper>
        <div>
          <input
            type="text"
            placeholder="Digite seu username"
            {...register('username')}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Digite o repo especifico"
            {...register('repo')}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Digite o nome da issue (Opcional)"
          {...register('issueName')}
        />

        <button type="submit" disabled={isSubmitting}>
          Buscar
        </button>
      </InputWrapper>
    </SearchFormContainer>
  )
}
