import cn from 'classnames'
import { type ButtonHTMLAttributes, type FC } from 'react'

import cls from './Button.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
}
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ButtonTheme.CLEAR,
        size = ButtonSize.M,
        square,
        ...otherProps
    } = props
    return (
        <button
            className={cn(cls.Button, className, {
                [cls[theme]]: true,
                [cls[size]]: true,
                [cls.square]: square
            })}
            {...otherProps}
        >
            {children}
        </button>
    )
}
