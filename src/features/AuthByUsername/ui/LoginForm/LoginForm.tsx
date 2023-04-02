import cn from 'classnames'
import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { type TReducerList, useLazyReduce } from 'shared/hooks/useLazyReduce/useLazyReduce'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

export interface LoginFormProps {
    className?: string
}

const initialReducers: TReducerList = {
    loginForm: loginReducer
}

const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)

    const handleChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value))
        },
        [dispatch]
    )
    const handleChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value))
        },
        [dispatch]
    )

    const handleLogin = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, username, password])

    useLazyReduce({ reducers: initialReducers, removeAfterUnmount: true })
    return (
        <div className={cn(cls.LoginForm, className)}>
            <Text title={'Форма авторизации'} />
            {error ? <Text text={error} theme={TextTheme.ERROR} /> : null}
            <Input
                className={cls.input}
                placeholder={'Введите username'}
                value={username}
                onChange={handleChangeUsername}
            />
            <Input
                className={cls.input}
                placeholder={'Введите password'}
                value={password}
                onChange={handleChangePassword}
            />
            <Button className={cls.loginBtn} disabled={isLoading} onClick={handleLogin}>
                {t('Войти')}
            </Button>
        </div>
    )
})

export default LoginForm
