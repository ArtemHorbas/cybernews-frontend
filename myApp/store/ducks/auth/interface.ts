import { IAuthResponse } from '@/types/auth/interfrace'

export interface IAuthInitialState extends IAuthResponse {
	isLoading: boolean
}
