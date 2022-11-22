import { FC } from 'react'
import { INewsPage } from '@/ScreensComponents/news/interface'
import { MainLayout } from '@/layouts/main'
import { MoreNewsItem } from '@/ScreensComponents/news/More/Item'

export const MoreNewsScreen: FC<INewsPage> = ({ posts }) => {
	return (
		<MainLayout title={'New Page'} mainHeader>
			<h1 className={'title'}>MORE NEWS</h1>
			<div className={'flex flex-col items-center justify-center gap-y-96'}>
				{posts.map(post => (
					<MoreNewsItem post={post} key={post.id} />
				))}
			</div>
		</MainLayout>
	)
}
