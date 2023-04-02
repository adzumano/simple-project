import { type DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/provider/StoreProvider'

import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername', () => {
    test('should return value', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                username: 'admin'
            }
        }
        expect(getLoginUsername(state as IStateSchema)).toEqual('admin')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {}
        expect(getLoginUsername(state as IStateSchema)).toEqual('')
    })
})
