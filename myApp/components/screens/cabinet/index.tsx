import { FC } from 'react'
import { MainLayout } from '@/layouts/main'
import { UserCabinet } from '@/GlobalComponents/UserCabinet'
import { useAuth } from '@/store/hooks/ducks/useAuth'

export const CabinetScreen: FC = () => {
	const { user } = useAuth()

	if (!user) {
		return <></>
	}

	return (
		<MainLayout title={'Cabinet'} mainHeader>
			<UserCabinet data={user} isCabinet />
		</MainLayout>
	)
}
