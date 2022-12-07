import { FC } from 'react'
import { MainLayout } from '@/layouts/main'
import Image from 'next/image'
import { IFullNews } from '@/ScreensComponents/news/FullNews/interface'
import { useRouter } from 'next/router'
import { useCheckAccess } from '@/hooks/useCheckAccess'
import Link from 'next/link'
import { postApi } from '@/store/api/post'

export const FullNewsScreen: FC<IFullNews> = ({ post }) => {
	const { push } = useRouter()

	const [removePost] = postApi.useRemovePostMutation()

	const onDelete = async () => {
		removePost(post.id)
			.unwrap()
			.then(() => push('/news'))
	}

	return (
		<MainLayout title={`News: ${post.title}`} mainHeader>
			<h1 className={'title'}>{post.title}</h1>
			<div className={'relative flex flex-col items-center justify-center'}>
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
					<p className={'my-8'}>{post.content}</p>
					<Link href={`/user/${post.userId}`}>
						Author: {post.author.userName} {post.author.email}
					</Link>
					{useCheckAccess() && (
						<button
							onClick={onDelete}
							className={'btn btn-primary absolute left-2 bottom-2'}
						>
							Delete
						</button>
					)}
				</div>
			</div>
		</MainLayout>
	)
}
