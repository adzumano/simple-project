import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type IUser, userActions } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface ILoginByUsernameProps {
    username: string
    password: string
}
export const loginByUsername = createAsyncThunk<
    IUser,
    ILoginByUsernameProps,
    { rejectValue: string }
>('login/loginByUsername', async (data, thunkAPI) => {
    try {
        const response = await axios.post<IUser>('http://localhost:8000/login', data)

        if (!response.data) {
            throw new Error()
        }

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
        thunkAPI.dispatch(userActions.setAuthData(response.data))

        return response.data
    } catch (e) {
        return thunkAPI.rejectWithValue(i18n.t('login_error_text'))
    }
})
