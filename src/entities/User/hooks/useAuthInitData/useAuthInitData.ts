import { userActions } from 'entities/User'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useAuthInitData = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])
}
