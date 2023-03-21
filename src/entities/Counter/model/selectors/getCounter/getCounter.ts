import { type IStateSchema } from 'app/provider/StoreProvider'
import { type CounterSchema } from 'entities/Counter'

export const getCounter = (state: IStateSchema): CounterSchema => state.counter
