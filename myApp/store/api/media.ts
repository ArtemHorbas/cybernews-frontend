import { api } from '@/store/api/api'
import { IMediaDto, IMediaResponse } from '@/types/media/interface'

export const mediaApi = api.injectEndpoints({
	endpoints: build => ({
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
