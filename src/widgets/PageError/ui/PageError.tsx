import cn from 'classnames'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

import cls from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}
export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation()

    const onReload = (): void => {
        location.reload()
    }
    return (
        <div className={cn(cls.PageError, className)}>
            <p>{t('page_error')}</p>
            <Button className={cls.PageError__btn} onClick={onReload}>
                {t('reload_page')}
            </Button>
        </div>
    )
}
