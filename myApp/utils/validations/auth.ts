import * as yup from 'yup'

export const LoginSchema = yup
	.object({
		email: yup.string().email('Incorrect email').required('Write an email'),
		password: yup
			.string()
			.min(6, 'Min count is 6')
			.required('Write a password')
	})
	.required()

export const RegisterSchema = yup
	.object({
		userName: yup
			.string()
			.min(3, 'Min letter count is 3')
			.required('Write user name'),
		discord: yup.string(),
		steam: yup.string()
	})
	.concat(LoginSchema)
	.required()
