import cn from 'classnames'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

import cls from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}
export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation()
    return (
        <div className={cn(cls.LoginForm, className)}>
            <Input className={cls.input} placeholder={'Введите username'} />
            <Input className={cls.input} placeholder={'Введите password'} />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    )
}
