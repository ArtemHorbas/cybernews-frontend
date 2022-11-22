import { api } from '@/store/api/api'
import { IPost } from '@/types/post/interface'

export const postApi = api.injectEndpoints({
	endpoints: build => ({
		getNewest: build.query<IPost[], any>({
			query: () => `/post/newest`
		}),
		getPopular: build.query<IPost[], any>({
			query: () => `/post/most-popular`
		}),
		getById: build.query<IPost, number>({
			query: id => `/post/${id}`,
			providesTags: (result, error, id) => [{ type: 'Post', id }]
		})
	})
})
