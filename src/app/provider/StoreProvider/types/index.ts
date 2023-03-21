import { type CounterSchema } from 'entities/Counter'
import type { IUserSchema } from 'entities/User'

export interface IStateSchema {
    counter: CounterSchema
    user: IUserSchema
}
