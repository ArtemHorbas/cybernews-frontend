import { FC } from 'react'
import { IMainHeader } from '@/GlobalComponents/Header/cases/main/interface'
import { MainHeaderList } from '@/GlobalComponents/Header/cases/main/List'
import { Logo } from '@/UIComponents/logo'
import Link from 'next/link'
import { useAuth } from '@/store/hooks/ducks/useAuth'
import { Avatar } from '@/GlobalComponents/Avatar'
import { useCheckAccess } from '@/hooks/useCheckAccess'

export const MainHeader: FC<IMainHeader> = ({ ...headers }) => {
	const { user, token } = useAuth()

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
			<div className={'navbar-end flex space-x-20'}>
				{useCheckAccess() && (
					<Link href={'/news/create'}>
						<button className="btn btn-primary">Create News</button>
					</Link>
				)}
				{token ? (
					<Link href={'/user/cabinet'}>
						<Avatar url={user?.avatar} />
					</Link>
				) : (
					<div className={'flex space-x-4'}>
						<Link href={'/register'}>Sign Up</Link>
						<Link href={'/login'}>Sign In</Link>
					</div>
				)}
			</div>
		</>
	)
}
