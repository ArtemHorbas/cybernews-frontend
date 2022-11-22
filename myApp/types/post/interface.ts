import { IUser } from '@/types/user/interface'
import { IBase } from '@/types/base'

export interface IPost extends IBase {
	title: string
	miniText: string
	image: string
	description: string
	secondImage: string
	content: string
	views: number
	userId: number
	author: IUser
}
