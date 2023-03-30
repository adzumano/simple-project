import { AppRouter } from 'app/provider/router'
import classNames from 'classnames'
import { useAuthInitData } from 'entities/User'
import { Suspense } from 'react'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import { useTheme } from './provider/ThemeProvider'

const App = (): JSX.Element => {
    const { theme } = useTheme()

    useAuthInitData()
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
