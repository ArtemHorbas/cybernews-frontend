import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '@/config/axios'
import { TypeRootState } from '@/store/store'
import { IUser } from '@/types/user/interface'

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
		getProfile: build.query<IUser, any>({
			query: () => `user/profile`,
			providesTags: () => [{ type: 'Profile' }]
		})
	})
})
