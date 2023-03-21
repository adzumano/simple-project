import cn from 'classnames'
import { type ChangeEvent, type FC, type InputHTMLAttributes, memo } from 'react'

import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
}
export const Input: FC<InputProps> = memo((props) => {
    const { className, value, onChange, type = 'text', placeholder, ...otherProps } = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e.target.value)
    }
    return (
        <div className={cn(cls.inputWrapper, className)}>
            {placeholder ? <div className={cls.placeholder}>{`${placeholder}>`}</div> : null}
            <input
                className={cls.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    )
})
