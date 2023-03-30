import { type FC, type ReactNode, useState } from 'react'

import { defaultTheme } from '../const'
import { ThemeContext } from '../context/ThemeContext'
import { type Theme } from '../types'

interface ThemeProviderProps {
    children: ReactNode
    initialTheme?: Theme
}
export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props
    const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme)
    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
