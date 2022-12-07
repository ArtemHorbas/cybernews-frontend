import { axiosBuffed } from '@/config/axios'
import { IPost } from '@/types/post/interface'

export const PostService = {
	async getNewest() {
		const { data } = await axiosBuffed.get<IPost[]>('/post/newest')
		return data
	},

	async getPopular() {
		const { data } = await axiosBuffed.get<IPost[]>('/post/most-popular')
		return data
	},

	async getByUser(id: number) {
		const { data } = await axiosBuffed.get<IPost[]>(`/post/user/${id}`)
		return data
	},

	async getOne(id: number) {
		const { data } = await axiosBuffed.get<IPost>(`/post/${id}`)
		return data
	},

	async getOneWithoutViews(id: number) {
		const { data } = await axiosBuffed.get<IPost>(`/post/get-one/${id}`)
		return data
	}
}
