import { FC } from 'react'
import { IUserPage } from '@/ScreensComponents/user/interface'
import { UserCabinet } from '@/GlobalComponents/UserCabinet'
import { MainLayout } from '@/layouts/main'

export const UserScreen: FC<IUserPage> = ({ user }) => {
	return (
		<MainLayout title={'User Page'} mainHeader>
			<UserCabinet data={user} />
		</MainLayout>
	)
}
