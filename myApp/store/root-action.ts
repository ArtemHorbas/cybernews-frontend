import * as authActions from './ducks/auth/actions'
import { authSlice } from '@/store/ducks/auth/slice'

export const rootAction = {
	...authActions,
	setData: authSlice.actions.setData
}
