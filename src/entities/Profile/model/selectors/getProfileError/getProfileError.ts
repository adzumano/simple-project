import { type IStateSchema } from 'app/provider/StoreProvider'

export const getProfileError = (state: IStateSchema) => state.profile?.error
