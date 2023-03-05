import cn from 'classnames'
import { type ButtonHTMLAttributes, type FC } from 'react'

import cls from './Button.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
}
export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme = ButtonTheme.CLEAR, ...otherProps } = props
    return (
        <button className={cn(cls.Button, className, cls[theme])} {...otherProps}>
            {children}
        </button>
    )
}
