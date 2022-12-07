import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { UpdateProfileSchema } from '@/utils/validations/auth'
import { useAuth } from '@/store/hooks/ducks/useAuth'
import { IUpdateUserForm } from '@/ScreensComponents/user/update/form/interface'
import { UploadField } from '@/GlobalComponents/FormField/Upload'
import { FormField } from '@/GlobalComponents/FormField'
import clsx from 'clsx'
import { toastError } from '@/utils/api/errorTreatment'
import { IUser } from '@/types/user/interface'
import { api } from '@/store/api/api'
import { useActions } from '@/store/hooks/useActions'

export const UpdateUserForm: FC<{ user: IUser }> = ({ user }) => {
	const { push } = useRouter()

	const [avatar, setAvatar] = useState<string>(user.avatar)

	const { isLoading } = useAuth()
	const { setData } = useActions()

	const [updateProfile] = api.useUpdateUserMutation()

	const form = useForm<IUpdateUserForm>({
		resolver: yupResolver(UpdateProfileSchema),
		mode: 'onChange'
	})

	const onSubmit = async (values: IUpdateUserForm) => {
		if (avatar) values.avatar = avatar

		try {
			await updateProfile(values)
				.unwrap()
				.then(res => setData(res))
			await push('/user/cabinet')
		} catch (e) {
			toastError(e)
		}
	}

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<UploadField
					inputName={'Avatar'}
					folder={'avatar'}
					media={avatar}
					setMedia={setAvatar}
				/>
				<FormField
					name={'userName'}
					placeholder={'User Name'}
					defaultValue={user.userName}
				/>
				<FormField
					name={'email'}
					placeholder={'E-mail'}
					defaultValue={user.email}
				/>
				<FormField
					name={'discord'}
					placeholder={'Discord'}
					defaultValue={user.discord}
				/>
				<FormField
					name={'steam'}
					placeholder={'Steam'}
					defaultValue={user.steam}
				/>
				<button
					type={'submit'}
					className={clsx('btn btn-primary rounded-[8px] mt-4', {
						['btn-disabled']: !form.formState.isValid,
						['loading']: isLoading
					})}
				>
					Let's Go
				</button>
			</form>
		</FormProvider>
	)
}
