import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type IProfile, fetchProfileData } from 'entities/Profile'

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
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})
export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
