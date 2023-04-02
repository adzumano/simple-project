import { type DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/provider/StoreProvider'

import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword', () => {
    test('should return value', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                password: 'admin'
            }
        }
        expect(getLoginPassword(state as IStateSchema)).toEqual('admin')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {}
        expect(getLoginPassword(state as IStateSchema)).toEqual('')
    })
})
