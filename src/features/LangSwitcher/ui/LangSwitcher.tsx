import cn from 'classnames'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string
}
export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { i18n } = useTranslation()

    const onTranslate = (): void => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button className={cn(className)} onClick={onTranslate}>
            {i18n.language}
        </Button>
    )
}
