import { type StateSchema } from 'app/provider/StoreProvider'
import { type CounterSchema } from 'entities/Counter'

export const getCounter = (state: StateSchema): CounterSchema => state.counter
