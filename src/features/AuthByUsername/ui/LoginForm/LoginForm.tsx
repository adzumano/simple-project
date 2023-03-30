import cn from 'classnames'
import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'

import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}
export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { username, password, isLoading, error } = useSelector(getLoginState)

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value))
        },
        [dispatch]
    )
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value))
        },
        [dispatch]
    )

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])
    return (
        <div className={cn(cls.LoginForm, className)}>
            <Text title={'Форма авторизации'} />
            {error ? <Text text={error} theme={TextTheme.ERROR} /> : null}
            <Input
                className={cls.input}
                placeholder={'Введите username'}
                value={username}
                onChange={onChangeUsername}
            />
            <Input
                className={cls.input}
                placeholder={'Введите password'}
                value={password}
                onChange={onChangePassword}
            />
            <Button className={cls.loginBtn} disabled={isLoading} onClick={onLoginClick}>
                {t('Войти')}
            </Button>
        </div>
    )
})
