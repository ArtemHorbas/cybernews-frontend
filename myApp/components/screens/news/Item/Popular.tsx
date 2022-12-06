import { FC } from 'react'
import Link from 'next/link'
import { IPost } from '@/types/post/interface'
import Image from 'next/image'

export const NewsPopularItem: FC<{ post: IPost }> = ({ post }) => {
	return (
		<Link href={`/news/${post.id}`} className={'w-[500px] h-[250px]'}>
			<h1 className={'mb-4 font-bold text-2xl'}>{post.title}</h1>
			<Image
				src={`http://localhost:3000${post.image}`}
				alt={'Popular Image'}
				width={500}
				height={200}
			/>
		</Link>
	)
}
