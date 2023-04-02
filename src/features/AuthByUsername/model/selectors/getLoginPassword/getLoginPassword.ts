import { type IStateSchema } from 'app/provider/StoreProvider'

export const getLoginPassword = (state: IStateSchema) => state.loginForm?.password ?? ''
