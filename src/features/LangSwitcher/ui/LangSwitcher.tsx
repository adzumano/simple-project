import cn from 'classnames'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
    className?: string
}
export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation()

    const onTranslate = (): void => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <button className={cn(className)} onClick={onTranslate}>
            {i18n.language}
        </button>
    )
}
