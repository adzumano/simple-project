import { type Country, type Currency } from 'shared/const/common'

export interface IProfile {
    first_name: string
    last_name: string
    age: number
    currency: Currency
    country: Country
    city: string
    username: string
    avatar: string | null
}

export interface IProfileSchema {
    data?: IProfile | null
    isLoading: boolean
    error?: string | null
    readonly: boolean
}
