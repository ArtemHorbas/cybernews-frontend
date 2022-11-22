import { ILoginForm } from '@/ScreensComponents/login/form/interface'

export interface IRegisterForm extends ILoginForm {
	userName: string
	discord: string
	steam: string
}
