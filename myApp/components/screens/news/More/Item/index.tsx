import { FC } from 'react'
import Image from 'next/image'
import { IPost } from '@/types/post/interface'

export const MoreNewsItem: FC<{ post: IPost }> = ({ post }) => {
	return (
		<div
			className={
				'w-[1000px] h-[400px] rounded-xl bg-[#151515] hover:cursor-pointer'
			}
		>
			<Image
				src={`http://localhost:3000${post.image}`}
				alt={'ALTUSHKA'}
				width={1000}
				height={350}
			/>
			<div className={'mt-6 flex justify-between'}>
				<h1 className={'font-bold'}>{post.title}</h1>
				<p>{post.views}</p>
			</div>
		</div>
	)
}
