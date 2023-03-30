import cn from 'classnames'
import { getUserAuthData, userActions } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { type FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const authData = useSelector(getUserAuthData)

    const onOpen = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onClose = useCallback(() => {
        setIsOpen(false)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <nav className={cn(cls.Navbar, className)}>
                <div className={cls.Navbar__links}>
                    <Button
                        className={cls.Navbar__link}
                        theme={ButtonTheme.CLEAR_INVERTED}
                        onClick={onLogout}
                    >
                        {t('выйти')}
                    </Button>
                </div>
            </nav>
        )
    }
    return (
        <nav className={cn(cls.Navbar, className)}>
            <div className={cls.Navbar__links}>
                <Button
                    className={cls.Navbar__link}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onOpen}
                >
                    {t('войти')}
                </Button>
            </div>
            <LoginModal isOpen={isOpen} onClose={onClose} />
        </nav>
    )
}
