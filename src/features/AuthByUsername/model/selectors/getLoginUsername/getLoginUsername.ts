import { type IStateSchema } from 'app/provider/StoreProvider'

export const getLoginUsername = (state: IStateSchema) => state.loginForm?.username ?? ''
