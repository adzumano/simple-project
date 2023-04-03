import { type FC, memo, useMemo } from 'react'

import { sidebarItemList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './SidebarList.module.scss'

interface ISidebarListProps {
    collapsed: boolean
}
export const SidebarList: FC<ISidebarListProps> = memo(({ collapsed }) => {
    const itemsList = useMemo(
        () =>
            sidebarItemList.map((item) => (
                <div key={item.path} className={cls.SidebarList__block}>
                    <SidebarItem item={item} collapsed={collapsed} />
                </div>
            )),
        [collapsed]
    )
    return <nav className={cls.SidebarList}>{itemsList}</nav>
})
