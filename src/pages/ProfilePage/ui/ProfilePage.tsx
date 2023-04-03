import cn from 'classnames'
import { profileReducer } from 'entities/Profile'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { type TReducerList, useLazyReduce } from 'shared/hooks/useLazyReduce/useLazyReduce'

interface ProfilePageProps {
    className?: string
}

const reducers: TReducerList = {
    profile: profileReducer
}
const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation()

    useLazyReduce({ reducers, removeAfterUnmount: true })
    return <div className={cn(className)}>{t('profile_page')}</div>
}

export default ProfilePage
