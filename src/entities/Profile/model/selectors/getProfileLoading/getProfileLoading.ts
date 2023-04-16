import { type IStateSchema } from 'app/provider/StoreProvider'

export const getProfileLoading = (state: IStateSchema) => state.profile?.isLoading
