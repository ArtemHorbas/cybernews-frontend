import { FC } from 'react'
import { MainLayout } from '@/layouts/main'
import Image from 'next/image'
import { IPost } from '@/types/post/interface'

export const FullNewsScreen: FC<{ post: IPost }> = ({ post }) => {
	return (
		<MainLayout title={`News: ${post.title}`} mainHeader>
			<h1 className={'title'}>{post.title}</h1>
			<div className={'flex flex-col items-center justify-center'}>
				<Image
					src={`http://localhost:3000${post.image}`}
					alt={'Main Image'}
					width={700}
					height={250}
				/>
				<div
					className={
						'bg-gray-700 p-8 mt-12 flex flex-col items-center justify-center max-w-[1000px]'
					}
				>
					<p className={'font-medium mb-8'}>{post.description}</p>
					<Image
						src={`http://localhost:3000${post.secondImage}`}
						alt={'Second Image'}
						width={200}
						height={50}
					/>
					<p className={'mt-8'}>{post.content}</p>
				</div>
			</div>
		</MainLayout>
	)
}
