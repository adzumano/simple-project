import { type IStateSchema } from 'app/provider/StoreProvider'

export const getLoginIsLoading = (state: IStateSchema) => state.loginForm?.isLoading
