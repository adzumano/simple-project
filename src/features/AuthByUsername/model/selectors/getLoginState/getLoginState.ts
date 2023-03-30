import { type IStateSchema } from 'app/provider/StoreProvider'

export const getLoginState = (state: IStateSchema) => state.loginForm
