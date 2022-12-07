import { FC } from 'react'
import { FirstLayout } from '@/layouts/first'
import { UpdateUserForm } from '@/ScreensComponents/user/update/form'
import { useAuth } from '@/store/hooks/ducks/useAuth'

export const UpdateProfileScreen: FC = () => {
	const { user } = useAuth()
	if (!user) return null

	return (
		<FirstLayout title={'Sign Up Page'} signHeader>
			<div
				className={
					'mt-24 w-[660px] h-[320px] bg-gray-900 ml-auto mr-auto rounded-lg p-5'
				}
			>
				<h1 className={'font-bold text-center pt-2 pb-3 text-2xl'}>
					Update Profile
				</h1>
				<UpdateUserForm user={user} />
			</div>
		</FirstLayout>
	)
}
