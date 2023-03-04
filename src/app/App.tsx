import { AppRouter } from 'app/provider/router'
import classNames from 'classnames'
import { Suspense } from 'react'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import { useTheme } from './provider/ThemeProvider'
import './styles/index.scss'

const App = (): JSX.Element => {
    const { theme } = useTheme()
    return (
        <div className={classNames('app', theme)}>
            <Suspense fallback={'loading..'}>
                <Navbar />
                <div className={'content-page'}>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
