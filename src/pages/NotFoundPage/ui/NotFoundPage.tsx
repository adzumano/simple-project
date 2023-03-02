import cx from 'classnames'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}
const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation()
    return <div className={cx(cls.NotFoundPage, className)}>{t('not_found')}</div>
}

export default NotFoundPage
