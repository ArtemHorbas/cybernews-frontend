import { FC } from 'react'
import { MainLayout } from '@/layouts/main'
import { api } from '@/store/api/api'
import { UserCabinet } from '@/GlobalComponents/UserCabinet'
import { useAuth } from '@/store/hooks/ducks/useAuth'

export const CabinetScreen: FC = () => {
	const { user } = useAuth()

	const { data, isLoading } = api.useGetProfileQuery(null, {
		skip: !user,
		refetchOnFocus: true
	})

	if (!data) {
		return <></>
	}

	return (
		<MainLayout title={'Cabinet'} mainHeader>
			<UserCabinet data={data} />
		</MainLayout>
	)
}
