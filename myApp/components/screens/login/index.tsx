import { FC } from 'react'
import { FirstLayout } from '@/layouts/first'
import { LoginForm } from '@/ScreensComponents/login/form'

export const LoginScreen: FC = () => {
	return (
		<FirstLayout title={'Sign In Page'} signHeader>
			<div
				className={
					'mt-24 w-[660px] h-[320px] bg-gray-900 ml-auto mr-auto rounded-lg p-5'
				}
			>
				<h1 className={'font-bold text-center pt-2 pb-3 text-2xl'}>
					Sign In
				</h1>
				<LoginForm />
			</div>
		</FirstLayout>
	)
}
