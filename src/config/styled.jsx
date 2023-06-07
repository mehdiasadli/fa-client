import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

export default function StyledProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
