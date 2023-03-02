import cn from "classnames";
import cls from "./LangSwitcher.module.scss";
import {FC} from "react";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?:string
}
export const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
    const {t, i18n} = useTranslation();

    const onTranslate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en': 'ru')
    }
    return (
        <button className={cn(cls.LangSwitcher, className)} onClick={onTranslate}>
            {t('test')}
        </button>
    );
};

