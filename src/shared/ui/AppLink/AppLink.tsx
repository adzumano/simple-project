import cn from "classnames";
import cls from "./AppLink.module.scss";
import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY='primary',
    SECONDARY='secondary'
}
interface AppLinkProps extends LinkProps{
    className?:string;
    theme?: AppLinkTheme
}
export const AppLink: FC<AppLinkProps> = (props) => {
    const {className, children, theme=AppLinkTheme.PRIMARY, ...otherProps} = props;
    return (
        <Link className={cn(cls.AppLink, className, cls[theme])} {...otherProps}>
            {children}
        </Link>
    );
};

