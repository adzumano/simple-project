import cn from "classnames";
import cls from "./Navbar.module.scss";
import React, {FC} from "react";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "features/ThemeSwitcher";

interface NavbarProps {
    className?:string
}
export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <nav className={cn(cls.Navbar, className)}>
            <ThemeSwitcher/>
            <div className={cls.Navbar__links}>
                <AppLink to={'/about'} className={cls.Navbar__link} theme={AppLinkTheme.SECONDARY}>AboutPage</AppLink>
                <AppLink to={'/'} className={cls.Navbar__link}>MainPage</AppLink>
            </div>
        </nav>
    );
};

