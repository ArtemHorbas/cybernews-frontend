import { FC } from 'react'
import { IFormField } from '@/GlobalComponents/FormField/interface'
import { useFormContext } from 'react-hook-form'
import clsx from 'clsx'

export const FormField: FC<IFormField> = ({ name, placeholder }) => {
	const {
		register,
		formState: { errors }
	} = useFormContext()

	return (
		<div className={'flex items-center space-x-7 mb-8'}>
			<div className={'w-[90px]'}>{placeholder}</div>
			<input
				{...register(name)}
				placeholder={placeholder}
				type="text"
				className={clsx('input input-bordered input-sm w-full max-w-xs', {
					['input-primary']: !Boolean(errors[name]?.message),
					['input-error']: Boolean(errors[name]?.message)
				})}
			/>
			<p className={'text-sm text-red-600 font-bold'}>
				{/*@ts-ignore*/}
				{errors[name]?.message}
			</p>
		</div>
	)
}
