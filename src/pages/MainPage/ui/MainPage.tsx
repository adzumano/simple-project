import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'

const MainPage = (): JSX.Element => {
    const { t } = useTranslation()
    const [value, setValue] = useState('')

    const onChange = (value: string): void => setValue(value)
    return (
        <div>
            <p>{t('test')}</p>
            <Input placeholder={'Введите текст'} value={value} onChange={onChange} />
        </div>
    )
}

export default MainPage
