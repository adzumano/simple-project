import { type TAppDispatch } from 'app/provider/StoreProvider'
import { useDispatch } from 'react-redux'

export const useAppDispatch = () => useDispatch<TAppDispatch>()
