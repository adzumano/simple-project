import { RoutePath } from 'app/provider/router'
import cn from 'classnames'
import { LangSwitcher } from 'features/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'

import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}
export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const { t } = useTranslation()
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onCollapsed = (): void => {
        setCollapsed((prev) => !prev)
    }
    return (
        <div
            data-testid={'sidebar'}
            className={cn(cls.Sidebar, className, { [cls.collapsed]: collapsed })}
        >
            <div className={cls.Sidebar__switcher}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
            <Button
                data-testid={'sidebar-toggle'}
                className={cls.Sidebar__btn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
                onClick={onCollapsed}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.Sidebar__links}>
                <div className={cls.Sidebar__linkBlock}>
                    <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY}>
                        <MainIcon className={cls.Sidebar__icon} />
                        <span className={cls.Sidebar__link}>{t('main')}</span>
                    </AppLink>
                </div>
                <div className={cls.Sidebar__linkBlock}>
                    <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>
                        <AboutIcon className={cls.Sidebar__icon} />
                        <span className={cls.Sidebar__link}>{t('about')}</span>
                    </AppLink>
                </div>
            </div>
        </div>
    )
}
