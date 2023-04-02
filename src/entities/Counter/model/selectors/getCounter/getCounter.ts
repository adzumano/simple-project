import { type IStateSchema } from 'app/provider/StoreProvider'

export const getCounter = (state: IStateSchema) => state.counter
