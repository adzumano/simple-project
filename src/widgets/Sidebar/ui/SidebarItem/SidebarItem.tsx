import cn from 'classnames'
import { type FC, memo } from 'react'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import { type ISidebarItem } from '../../model/items'
import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
    item: ISidebarItem
    collapsed: boolean
}
export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
    const { item, collapsed } = props
    return (
        <AppLink
            to={item.path}
            theme={AppLinkTheme.SECONDARY}
            className={cn(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{item.text}</span>
        </AppLink>
    )
})
