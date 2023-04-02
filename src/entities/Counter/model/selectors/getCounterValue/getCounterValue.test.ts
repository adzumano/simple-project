import { type DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/provider/StoreProvider'

import { getCounterValue } from '../getCounterValue/getCounterValue'

describe('getCounterValue', () => {
    test('', () => {
        const state: DeepPartial<IStateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounterValue(state as IStateSchema)).toEqual(10)
    })
})
