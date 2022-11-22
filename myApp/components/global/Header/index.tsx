import { FC } from 'react'
import { HomeHeader } from '@/GlobalComponents/Header/cases/Home'
import { IHeader } from '@/GlobalComponents/Header/interface'
import { SignHeader } from '@/GlobalComponents/Header/cases/Sign'
import { MainHeader } from '@/GlobalComponents/Header/cases/main'

export const Header: FC<IHeader> = ({
	homeHeader,
	signHeader,
	mainHeader,
	...mainHeaderTypes
}) => {
	return (
		<header className={'navbar px-6 py-2'}>
			{homeHeader && <HomeHeader />}
			{signHeader && <SignHeader />}
			{mainHeader && <MainHeader {...mainHeaderTypes} />}
		</header>
	)
}
