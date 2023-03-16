import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/provider/StoreProvider'

import { getCounter } from '../getCounter/getCounter'

describe('getCounter', () => {
    test('should render counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
    })
})
