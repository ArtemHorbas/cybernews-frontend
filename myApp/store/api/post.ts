import { api } from '@/store/api/api'
import { IPost, IPostDto, IUpdatePostDto } from '@/types/post/interface'

export const postApi = api.injectEndpoints({
	endpoints: build => ({
		createPost: build.mutation<IPost, IPostDto>({
			query: dto => ({
				url: '/post',
				method: 'POST',
				body: dto
			})
		}),
		updatePost: build.mutation<IPost, IUpdatePostDto>({
			query: ({ id, ...dto }) => ({
				url: `/post/${id}`,
				method: 'PATCH',
				body: dto
			})
		}),
		removePost: build.mutation<number, number>({
			query: id => ({
				url: `/post/${id}`,
				method: 'DELETE'
			})
		})
	})
})
