import cn from 'classnames'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation()
    return (
        <nav className={cn(cls.Navbar, className)}>
            <div className={cls.Navbar__links}>
                <AppLink to={'/about'} className={cls.Navbar__link} theme={AppLinkTheme.SECONDARY}>
                    {t('about')}
                </AppLink>
                <AppLink to={'/'} className={cls.Navbar__link}>
                    {t('main')}
                </AppLink>
            </div>
        </nav>
    )
}
