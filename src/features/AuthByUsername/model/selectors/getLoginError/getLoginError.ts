import { type IStateSchema } from 'app/provider/StoreProvider'

export const getLoginError = (state: IStateSchema) => state.loginForm?.error
