import { FC } from 'react'
import Link from 'next/link'
import { IMainHeader } from '@/GlobalComponents/Header/cases/main/interface'
import clsx from 'clsx'

export const MainHeaderList: FC<IMainHeader> = ({
	newsHeader,
	tournametsHeader,
	matchesHeader,
	ratingHeader
}) => {
	return (
		<ul className={'flex space-x-20 text-white'}>
			<li>
				<Link
					href={'/news'}
					className={clsx('', {
						['text-gray-500']: newsHeader
					})}
				>
					News
				</Link>
			</li>
			<li>
				<Link
					href={'/tournaments'}
					className={clsx('', {
						['text-gray-500']: tournametsHeader
					})}
				>
					Tournaments
				</Link>
			</li>
			<li>
				<Link
					href={'/matches'}
					className={clsx('', {
						['text-gray-500']: matchesHeader
					})}
				>
					Matches
				</Link>
			</li>
			<li>
				<Link
					href={'/rating'}
					className={clsx('', {
						['text-gray-500']: ratingHeader
					})}
				>
					Rating
				</Link>
			</li>
		</ul>
	)
}
