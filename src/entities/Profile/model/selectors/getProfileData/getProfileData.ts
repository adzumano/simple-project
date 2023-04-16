import { type IStateSchema } from 'app/provider/StoreProvider'

export const getProfileData = (state: IStateSchema) => state.profile?.data
