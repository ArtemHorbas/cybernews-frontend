import { FC } from 'react'
import Head from 'next/head'
import { IMeta } from '@/GlobalComponents/Meta/interface'

export const Meta: FC<IMeta> = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<link rel="shortcut icon" href="/favicon.ico" />
			{description ? (
				<>
					<meta
						itemProp={'description'}
						name={'description'}
						content={description}
					/>
				</>
			) : (
				<meta
					itemProp={'description'}
					name={'description'}
					content={'CS, Dota, CS:GO, video games'}
				/>
			)}
		</Head>
	)
}
