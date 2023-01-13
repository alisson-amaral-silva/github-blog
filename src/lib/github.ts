import axios from 'axios'
import { useQuery } from 'react-query'

export function useGithubState(url = '', params = '') {
  return useQuery(['github', params], async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_GITHUB_API}/${url}`,
    )
    return data
  })
}
