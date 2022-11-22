import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { IRegisterForm } from '@/ScreensComponents/register/form/interface'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterSchema } from '@/utils/validations/auth'
import { FormField } from '@/GlobalComponents/FormField'
import clsx from 'clsx'
import { useAuth } from '@/store/hooks/ducks/useAuth'
import { useActions } from '@/store/hooks/useActions'
import { useRouter } from 'next/router'
import { toastError } from '@/utils/api/errorTreatment'

export const RegisterForm: FC = () => {
	const { push } = useRouter()

	const form = useForm<IRegisterForm>({
		resolver: yupResolver(RegisterSchema),
		mode: 'onChange'
	})

	const { isLoading } = useAuth()
	const { fetchRegister } = useActions()

	const onSubmit = async (values: IRegisterForm) => {
		try {
			await fetchRegister(values)
			await push('/news')
		} catch (e) {
			toastError(e)
		}
	}

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField name={'userName'} placeholder={'User Name'} />
				<FormField name={'email'} placeholder={'E-mail'} />
				<FormField name={'password'} placeholder={'Password'} />
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
