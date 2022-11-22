import { FC } from 'react'
import Image from 'next/image'
import { ILogo } from '@/UIComponents/logo/interface'

export const Logo: FC<ILogo> = ({ width, height }) => {
	return (
		<Image
			src={'/Logo/indexLogo.svg'}
			alt={'ss'}
			width={width ? width : 340}
			height={height ? height : 62}
		/>
	)
}
