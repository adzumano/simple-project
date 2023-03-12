import cn from 'classnames'
import { LangSwitcher } from 'features/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

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
            <Button data-testid={'sidebar-toggle'} onClick={onCollapsed}>
                {t('menu')}
            </Button>
        </div>
    )
}
