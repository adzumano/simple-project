import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IUser, userActions } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { type IThunkConfig } from 'app/provider/StoreProvider/types'

interface ILoginByUsernameProps {
    username: string
    password: string
}
export const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameProps, IThunkConfig<string>>(
    'login/loginByUsername',
    async (data, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI
        try {
            const response = await extra.api.post<IUser>(
                '/login',
                data
            )

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))
            extra.navigate?.('/about')
            return response.data
        } catch (e) {
            return rejectWithValue(i18n.t('login_error_text'))
        }
    }
)
