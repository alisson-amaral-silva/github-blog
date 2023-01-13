import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { IssuesProvider } from './contexts/IssuesContext'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <IssuesProvider>
            <GlobalStyle />
            <Router />
          </IssuesProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
