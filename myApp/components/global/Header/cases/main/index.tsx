import { FC } from 'react'
import { IMainHeader } from '@/GlobalComponents/Header/cases/main/interface'
import { MainHeaderList } from '@/GlobalComponents/Header/cases/main/List'
import { Logo } from '@/UIComponents/logo'
import Link from 'next/link'
import { useAuth } from '@/store/hooks/ducks/useAuth'
import Image from 'next/image'
import { useActions } from '@/store/hooks/useActions'

export const MainHeader: FC<IMainHeader> = ({ ...headers }) => {
	const { token } = useAuth()
	const { fetchLogout } = useActions()
	return (
		<>
			<div className={'navbar-start'}>
				<Link href={'/'}>
					<Logo width={125} />
				</Link>
			</div>
			<div className={'navbar-center'}>
				<MainHeaderList {...headers} />
			</div>
			<div className={'navbar-end flex space-x-4'}>
				{token ? (
					<Link href={'/cabinet'}>
						<Image
							src={'/SocIcons/CabinetLogo.svg'}
							alt={'Inst'}
							width={25}
							height={25}
						/>
					</Link>
				) : (
					<>
						<Link href={'/register'}>Sign Up</Link>
						<Link href={'/login'}>Sign In</Link>
					</>
				)}
			</div>
		</>
	)
}
