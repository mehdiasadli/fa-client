import MantineProvider from '../config/mantine'
import ReduxProvider from '../config/redux'
import StyledProvider from '../config/styled'
import { BrowserRouter } from 'react-router-dom'
import ReactQueryProvider from '../config/query'
import { Toaster } from 'react-hot-toast'

export default function Providers({ children }) {
  return (
    <BrowserRouter>
      <ReduxProvider>
        <ReactQueryProvider>
          <StyledProvider>
            <Toaster />
            <MantineProvider>{children}</MantineProvider>
          </StyledProvider>
        </ReactQueryProvider>
      </ReduxProvider>
    </BrowserRouter>
  )
}
