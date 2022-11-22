import { FC, PropsWithChildren } from 'react'
import { ILayout } from '@/layouts/first/interface'
import { Meta } from '@/GlobalComponents/Meta'
import { Header } from '@/GlobalComponents/Header'
import { Footer } from '@/GlobalComponents/Footer'

export const MainLayout: FC<PropsWithChildren<ILayout>> = ({
	children,
	title,
	description,
	...headers
}) => {
	return (
		<>
			<Meta title={title} description={description} />
			<div>
				<Header {...headers} />
				<main>{children}</main>
				<Footer />
			</div>
		</>
	)
}
