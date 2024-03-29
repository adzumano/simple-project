import { Counter } from 'entities/Counter'
import { useTranslation } from 'react-i18next'

const AboutPage = (): JSX.Element => {
    const { t } = useTranslation()
    return (
        <div>
            {t('about')} <Counter />
        </div>
    )
}

export default AboutPage
