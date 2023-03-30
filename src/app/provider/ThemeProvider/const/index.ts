import { Theme } from '../types'

export const LOCAL_STORAGE_THEME_KEY: string = 'theme'

export const defaultTheme: Theme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT
