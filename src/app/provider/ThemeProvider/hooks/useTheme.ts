import { useContext } from 'react'

import { LOCAL_STORAGE_THEME_KEY } from '../const'
import { ThemeContext } from '../context/ThemeContext'
import { Theme } from '../types'

interface UseThemeResult {
    theme?: Theme
    toggleTheme?: () => void
}
export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)
    const toggleTheme = (): void => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return { theme, toggleTheme }
}
