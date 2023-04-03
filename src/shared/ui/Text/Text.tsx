import cn from 'classnames'
import { type FC, memo } from 'react'

import cls from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}
interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
}
export const Text: FC<TextProps> = memo(({ className, text, title, theme = TextTheme.PRIMARY }) => {
    return (
        <div className={cn(cls.Text, className, { [cls[theme]]: true })}>
            {title ? <p className={cls.title}>{title}</p> : null}
            {text ? <p className={cls.text}>{text}</p> : null}
        </div>
    )
})
