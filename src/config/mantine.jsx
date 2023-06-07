import { MantineProvider as Provider } from '@mantine/core'
import { theme } from '../styles/theme'

export default function MantineProvider({ children }) {
  return (
    <Provider withGlobalStyles withNormalizeCSS theme={theme}>
      {children}
    </Provider>
  )
}
