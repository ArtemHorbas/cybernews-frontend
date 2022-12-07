import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '@/config/axios'
import { TypeRootState } from '@/store/store'
import { IUser } from '@/types/user/interface'
import { IUpdateUserForm } from '@/ScreensComponents/user/update/form/interface'

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
		updateUser: build.mutation<IUser, IUpdateUserForm>({
			query: dto => ({
				url: '/user',
				method: 'PATCH',
				body: dto
			})
		}),
		removeUser: build.mutation<number, void>({
			query: () => ({
				url: '/user',
				method: 'DELETE'
			})
		})
	})
})
