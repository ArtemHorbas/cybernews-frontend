import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthResponse } from '@/types/auth/interfrace'
import { IRegisterForm } from '@/ScreensComponents/register/form/interface'
import { AuthService } from '@/services/auth'
import { toastr } from 'react-redux-toastr'
import { toastError } from '@/utils/api/errorTreatment'
import { ILoginForm } from '@/ScreensComponents/login/form/interface'

export const fetchRegister = createAsyncThunk<IAuthResponse, IRegisterForm>(
	'auth/register',
	async (dto, thunkAPI) => {
		try {
			const user = await AuthService.register(dto)
			toastr.success('Register', 'Successful')
			return user
		} catch (e) {
			toastError(e)
			return thunkAPI.rejectWithValue(e)
		}
	}
)

export const fetchLogin = createAsyncThunk<IAuthResponse, ILoginForm>(
	'auth/login',
	async (dto, thunkAPI) => {
		try {
			const user = await AuthService.login(dto)
			toastr.success('Login', 'Successful')
			return user
		} catch (e) {
			toastError(e)
			return thunkAPI.rejectWithValue(e)
		}
	}
)

export const fetchLogout = createAsyncThunk('auth/logout', async () => {
	toastr.success('Logout', 'Successful')

	return {}
})
