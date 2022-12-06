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

export interface IPostDto {
	title: string
	miniText: string
	image: string
	description: string
	secondImage: string
	content: string
}

export interface IUpdatePostDto extends IPostDto {
	id: number
}
