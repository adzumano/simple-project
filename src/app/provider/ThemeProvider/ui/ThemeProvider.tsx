import React, { type FC, type ReactNode, useMemo, useState } from 'react'

import { LOCAL_STORAGE_THEME_KEY } from '../lib/const'
import { ThemeContext } from '../lib/context/ThemeContext'
import { Theme } from '../types'

export const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface ThemeProviderProps {
    children: ReactNode
    initialTheme?: Theme
}
export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props
    const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme)

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme
        }),
        [theme]
    )
    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
