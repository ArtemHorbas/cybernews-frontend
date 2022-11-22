import { IAuthInitialState } from '@/store/ducks/auth/interface'
import { createSlice } from '@reduxjs/toolkit'
import {
	fetchLogin,
	fetchLogout,
	fetchRegister
} from '@/store/ducks/auth/actions'

const initialState: IAuthInitialState = {
	user: null,
	token: '',
	isLoading: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchRegister.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchRegister.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
				state.token = payload.token
			})
			.addCase(fetchRegister.rejected, state => {
				state.isLoading = false
				state.user = null
				state.token = ''
			})
			.addCase(fetchLogin.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchLogin.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
				state.token = payload.token
			})
			.addCase(fetchLogin.rejected, state => {
				state.isLoading = false
				state.user = null
				state.token = ''
			})
			.addCase(fetchLogout.fulfilled, state => {
				state.isLoading = false
				state.user = null
				state.token = ''
			})
	}
})
