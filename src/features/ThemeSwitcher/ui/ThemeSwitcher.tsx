import { useTheme } from 'app/provider/ThemeProvider'
import { Theme } from 'app/provider/ThemeProvider/types'
import cn from 'classnames'
import React, { type FC } from 'react'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()
    return (
        <Button className={cn(className)} theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}
