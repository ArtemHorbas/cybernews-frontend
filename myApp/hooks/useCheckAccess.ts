import { IUser } from '@/types/user/interface'
import { AppRoles } from '@/utils/enums/roles'
import { useAuth } from '@/store/hooks/ducks/useAuth'

export const useCheckAccess = () => {
	const { user } = useAuth()

	if (!user) return false

	const checkRole = (user: IUser) => {
		for (let role of user.roles) {
			return role.value == AppRoles.ADMIN || role.value == AppRoles.MODER
		}
	}

	return checkRole(user)
}
