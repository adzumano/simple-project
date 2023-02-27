import cn from "classnames";
import cls from "./Sidebar.module.scss";
import React, {FC, useState} from "react";
import {ThemeSwitcher} from "features/ThemeSwitcher";

interface SidebarProps {
    className?:string
}
export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onCollapsed = () => setCollapsed(prev => !prev);
    return (
        <div className={cn(cls.Sidebar, className, {[cls.collapsed]: collapsed})}>
            <div className={cls.Sidebar__switcher}>
                <ThemeSwitcher/>
            </div>
            <button onClick={onCollapsed}>toggle</button>
        </div>
    );
};

