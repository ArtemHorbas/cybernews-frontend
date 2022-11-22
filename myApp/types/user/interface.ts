import { IBase } from '@/types/base'
import { IRoles } from '@/types/roles/interface'
import { IPost } from '@/types/post/interface'

export interface IUser extends IBase {
	userName: string
	email: string
	steam: string
	discord: string
	posts: IPost[]
	roles: IRoles[]
}
