import { type IStateSchema } from 'app/provider/StoreProvider'

export const getUserAuthData = (state: IStateSchema) => state.user.authData
