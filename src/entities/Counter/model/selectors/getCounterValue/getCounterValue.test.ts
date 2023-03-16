import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/provider/StoreProvider'

import { getCounterValue } from '../getCounterValue/getCounterValue'

describe('getCounterValue', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounterValue(state as StateSchema)).toEqual(10)
    })
})
