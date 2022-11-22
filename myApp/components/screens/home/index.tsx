import { FC } from 'react'
import { FirstLayout } from '@/layouts/first'
import Link from 'next/link'
import { Logo } from '@/UIComponents/logo'

export const HomeScreen: FC = () => {
	return (
		<FirstLayout title={'Main Page'} homeHeader>
			<div className={'h-[75vh] flex justify-center items-center'}>
				<Logo />
			</div>
			<Link className="flex justify-center" href={'/news'}>
				<button className={'main-button'}>JOIN</button>
			</Link>
		</FirstLayout>
	)
}
