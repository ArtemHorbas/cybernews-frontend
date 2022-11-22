import { FC } from 'react'
import { Logo } from '@/UIComponents/logo'
import Link from 'next/link'

export const SignHeader: FC = () => {
	return (
		<>
			<div className={'navbar-start'} />
			<div className={'navbar-center pt-6'}>
				<Link href={'/news'}>
					<Logo />
				</Link>
			</div>
			<div className={'navbar-end'} />
		</>
	)
}
