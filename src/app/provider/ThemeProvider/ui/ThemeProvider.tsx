import React, { FC, ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY } from '../lib/const'
import { Theme } from '../types'
import { ThemeContext } from '../lib/context/ThemeContext'

export const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface ThemeProviderProps {
    children: ReactNode
}
export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme
        }),
        [theme]
    )
    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
