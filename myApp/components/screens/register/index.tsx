import { FC } from 'react'
import { FirstLayout } from '@/layouts/first'
import { RegisterForm } from '@/ScreensComponents/register/form'

export const RegisterScreen: FC = () => {
	return (
		<FirstLayout title={'Sign Up Page'} signHeader>
			<div
				className={
					'mt-24 w-[660px] h-[320px] bg-gray-900 ml-auto mr-auto rounded-lg p-5'
				}
			>
				<h1 className={'font-bold text-center pt-2 pb-3 text-2xl'}>
					Registration
				</h1>
				<RegisterForm />
			</div>
		</FirstLayout>
	)
}
