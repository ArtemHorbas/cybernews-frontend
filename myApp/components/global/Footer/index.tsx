import { FC } from 'react'
import { Logo } from '@/UIComponents/logo'
import Image from 'next/image'

export const Footer: FC = () => {
	return (
		<footer
			className={
				'navbar absolute left-0 bottom-0 h-20 bg-black w-full py-2 px-8'
			}
		>
			<div className={'navbar-start flex space-x-7'}>
				<a href="">
					<Image
						src={'/SocIcons/TelegramIcon.svg'}
						alt={'TG'}
						width={35}
						height={35}
					/>
				</a>
				<a href="">
					<Image
						src={'/SocIcons/InstagramIcon.svg'}
						alt={'Inst'}
						width={35}
						height={35}
					/>
				</a>
			</div>
			<div className={'navbar-center'} />
			<div className={'navbar-end'}>
				<Logo width={140} />
			</div>
		</footer>
	)
}
