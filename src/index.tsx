import App from 'app/App'
import { ErrorBoundary } from 'app/provider/ErrorBoundary'
import { StoreProvider } from 'app/provider/StoreProvider'
import { ThemeProvider } from 'app/provider/ThemeProvider'
import 'app/styles/index.scss'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
