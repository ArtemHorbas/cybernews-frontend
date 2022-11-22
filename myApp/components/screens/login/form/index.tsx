import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginSchema } from '@/utils/validations/auth'
import { ILoginForm } from '@/ScreensComponents/login/form/interface'
import { FormField } from '@/GlobalComponents/FormField'
import clsx from 'clsx'
import { useAuth } from '@/store/hooks/ducks/useAuth'
import { useActions } from '@/store/hooks/useActions'
import { useRouter } from 'next/router'
import { toastError } from '@/utils/api/errorTreatment'

export const LoginForm: FC = () => {
	const { push } = useRouter()

	const form = useForm<ILoginForm>({
		resolver: yupResolver(LoginSchema),
		mode: 'onChange'
	})

	const { isLoading } = useAuth()
	const { fetchLogin } = useActions()

	const onSubmit = async (values: ILoginForm) => {
		try {
			await fetchLogin(values)
			await push('/news')
		} catch (e) {
			toastError(e)
		}
	}

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField name={'email'} placeholder={'E-mail'} />
				<FormField name={'password'} placeholder={'Password'} />
				<button
					type={'submit'}
					className={clsx('btn btn-primary rounded-[8px] mt-4', {
						['btn-disabled']: !form.formState.isValid,
						['loading']: isLoading
					})}
				>
					Sign In
				</button>
			</form>
		</FormProvider>
	)
}
