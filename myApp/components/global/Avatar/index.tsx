import { FC } from 'react'
import { IAvatar } from '@/GlobalComponents/Avatar/interface'
import clsx from 'clsx'

export const Avatar: FC<IAvatar> = ({ url, isRounded }) => {
	return (
		<div className="avatar mt-4">
			<div
				className={clsx(
					'w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2',
					{
						['rounded w-32']: isRounded
					}
				)}
			>
				<img
					src={
						url
							? `http://localhost:3000${url}`
							: '/SocIcons/CabinetLogo.svg'
					}
					alt={'User Avatar'}
				/>
			</div>
		</div>
	)
}
