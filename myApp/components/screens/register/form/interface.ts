import { ILoginForm } from '@/ScreensComponents/login/form/interface'

export interface IRegisterForm extends ILoginForm {
	avatar?: string
	userName: string
	discord: string
	steam: string
}
