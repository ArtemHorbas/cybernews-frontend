import { axiosBuffed } from '@/config/axios'
import { IUser } from '@/types/user/interface'

export const UserService = {
	async getAll() {
		const { data } = await axiosBuffed.get<IUser[]>(`/user`)
		return data
	},

	async getOne(id: number) {
		const { data } = await axiosBuffed.get<IUser>(`/user/by-id/${id}`)
		return data
	}
}
