import cn from 'classnames'
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile'
import { type FC, useEffect } from 'react'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { type TReducerList, useLazyReduce } from 'shared/hooks/useLazyReduce/useLazyReduce'

interface ProfilePageProps {
    className?: string
}

const reducers: TReducerList = {
    profile: profileReducer
}
const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    useLazyReduce({ reducers, removeAfterUnmount: true })
    return (
        <div className={cn(className)}>
            <ProfileCard />
        </div>
    )
}

export default ProfilePage
