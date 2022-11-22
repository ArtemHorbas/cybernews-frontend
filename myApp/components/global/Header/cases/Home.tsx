import { FC } from 'react'
import Link from 'next/link'

export const HomeHeader: FC = () => {
	return (
		<>
			<div className={'navbar-start'} />
			<div className={'navbar-center'}>
				<ul className={'flex space-x-20 text-white'}>
					<li>
						<Link href={'/tournaments'}>Tournaments</Link>
					</li>
					<li>
						<Link href={'/matches'}>Matches</Link>
					</li>
					<li>
						<Link href={'/rating'}>Rating</Link>
					</li>
				</ul>
			</div>
			<div className={'navbar-end'} />
		</>
	)
}
