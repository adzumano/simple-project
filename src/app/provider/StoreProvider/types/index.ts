import { type CounterSchema } from 'entities/Counter'
import { type IUserSchema } from 'entities/User'
import { type ILoginSchema } from 'features/AuthByUsername'

export interface IStateSchema {
    counter: CounterSchema
    user: IUserSchema
    loginForm: ILoginSchema
}
