import React from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = (): JSX.Element => {
    const { t } = useTranslation()
    return <div>{t('test')}</div>
}

export default MainPage
