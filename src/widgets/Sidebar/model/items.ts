import { RoutePath } from 'app/provider/router'
import { type FC, type SVGAttributes } from 'react'
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'

export interface ISidebarItem {
    path: string
    text: string
    Icon: FC<SVGAttributes<SVGElement>>
}

export const sidebarItemList: ISidebarItem[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: MainIcon
    },
    {
        path: RoutePath.about,
        text: 'О нас',
        Icon: AboutIcon
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: ProfileIcon
    }
]
