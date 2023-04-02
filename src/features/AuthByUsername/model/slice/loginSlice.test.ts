import { type DeepPartial } from '@reduxjs/toolkit'
import { type ILoginSchema } from 'features/AuthByUsername'

import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<ILoginSchema> = {
            username: '123'
        }
        expect(loginReducer(state, loginActions.setUsername('admin'))).toEqual({
            username: 'admin'
        })
    })
    test('test set password', () => {
        const state: DeepPartial<ILoginSchema> = {
            password: '123'
        }
        expect(loginReducer(state, loginActions.setPassword('admin'))).toEqual({
            password: 'admin'
        })
    })
})
