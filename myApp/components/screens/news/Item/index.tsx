import { FC } from 'react'
import Image from 'next/image'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import Link from 'next/link'
import { IPost } from '@/types/post/interface'

dayjs.extend(LocalizedFormat)

export const NewsItem: FC<{ post: IPost }> = ({ post }) => {
	return (
		<Link href={`/news/${post.id}`}>
			<div
				className={
					'w-[358px] h-[386px] rounded-xl bg-[#151515] hover:cursor-pointer'
				}
			>
				<Image
					src={`http://localhost:3000${post.image}`}
					alt={'ALTUSHKA'}
					width={368}
					height={188}
				/>
				<div className={'flex justify-between items-center px-4'}>
					<p>{dayjs(post.createdAt).format('L LT')}</p>
					<div className={'flex space-x-3 items-center'}>
						<p>{post.views}</p>
						<Image
							src={'/helpIcons/viewsIcon.svg'}
							alt={'Inst'}
							width={25}
							height={25}
						/>
					</div>
				</div>
				<h1 className={'text-center text-xl my-4 font-bold'}>
					{post.title}
				</h1>
				<p className={'text-center text-sm font-medium'}>{post.miniText}</p>
			</div>
		</Link>
	)
}
