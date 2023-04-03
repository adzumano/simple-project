import { createSlice } from '@reduxjs/toolkit'

import { type IProfileSchema } from '../types/profile'

const initialState: IProfileSchema = {
    isLoading: false,
    error: null,
    readonly: true,
    data: null
}
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
})
export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
