import { type DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/provider/StoreProvider'

import { getCounter } from '../getCounter/getCounter'

describe('getCounter', () => {
    test('should render counter value', () => {
        const state: DeepPartial<IStateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounter(state)).toEqual({ value: 10 })
    })
})
