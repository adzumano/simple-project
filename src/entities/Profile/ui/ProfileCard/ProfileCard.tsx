import cn from 'classnames'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'

import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
    className?: string
}
export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
    const { t } = useTranslation()
    const data = useSelector(getProfileData)

    return (
        <div className={cn(cls.ProfileCard, className)}>
            <div className={cls.header}>
                <Text title={'profile'} />
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t('edit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input className={cls.input} value={data?.first_name} />
                <Input className={cls.input} value={data?.last_name} />
            </div>
        </div>
    )
}
