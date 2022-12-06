import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '@/config/axios'
import { TypeRootState } from '@/store/store'
import { IPost, IPostDto, IUpdatePostDto } from '@/types/post/interface'
import { IUser } from '@/types/user/interface'
import { IUpdateUserForm } from '@/ScreensComponents/updateUser/form/interface'
import { IMediaDto, IMediaResponse } from '@/types/media/interface'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Post', 'Profile'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as TypeRootState).auth.token

			if (token) headers.set('Authorization', `Bearer ${token}`)

			return headers
		}
	}),
	refetchOnFocus: true,
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
		}),
		updateUser: build.mutation<IUser, IUpdateUserForm>({
			query: dto => ({
				url: '/user',
				method: 'PATCH',
				body: dto
			})
		}),
		uploadMedia: build.mutation<IMediaResponse, IMediaDto>({
			query: ({ formData, folder }) => ({
				url: '/media',
				method: 'POST',
				params: { folder },
				body: formData
			})
		})
	})
})
