import cn from 'classnames'
import { LangSwitcher } from 'features/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { type FC, memo, useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'

import { SidebarList } from '../SidebarList/SidebarList'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}
export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
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
            <SidebarList collapsed={collapsed} />
        </div>
    )
})
