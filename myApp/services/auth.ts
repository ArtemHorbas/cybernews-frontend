import { IRegisterForm } from '@/ScreensComponents/register/form/interface'
import { axiosBuffed } from '@/config/axios'
import { IAuthResponse } from '@/types/auth/interfrace'
import { ILoginForm } from '@/ScreensComponents/login/form/interface'

export const AuthService = {
	async register(dto: IRegisterForm) {
		const { data } = await axiosBuffed.post<IAuthResponse>(
			'/auth/register',
			dto
		)
		return data
	},

	async login(dto: ILoginForm) {
		const { data } = await axiosBuffed.post<IAuthResponse>(
			'/auth/login',
			dto
		)
		return data
	}
}
