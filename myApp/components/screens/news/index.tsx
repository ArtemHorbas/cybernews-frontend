import { FC } from 'react'
import { MainLayout } from '@/layouts/main'
import { NewsItem } from '@/ScreensComponents/news/Item'
import { INewsPage } from '@/ScreensComponents/news/interface'
import Link from 'next/link'
import { NewsPopularItem } from '@/ScreensComponents/news/Item/Popular'

export const NewsScreen: FC<INewsPage> = ({ posts }) => {
	const topPost = posts[0]

	return (
		<MainLayout title={'New Page'} mainHeader newsHeader>
			<h1 className={'title'}>MAIN NEWS</h1>
			<div className={'flex justify-center mb-6'}>
				<NewsPopularItem post={topPost} />
			</div>
			<div className={'flex flex-wrap justify-between px-14 mt-8'}>
				{posts.map(post => (
					<NewsItem post={post} key={post.id} />
				))}
			</div>
			<Link href={'/news/more'} className={'flex justify-center mt-32'}>
				<button className={'main-button'}>MORE</button>
			</Link>
		</MainLayout>
	)
}
