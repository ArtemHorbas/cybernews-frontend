import { FC } from 'react'
import { INewsPage } from '@/ScreensComponents/news/interface'
import { MoreNewsItem } from '@/ScreensComponents/news/More/Item'
import { MainLayout } from '@/layouts/main'

export const UserNewsScreen: FC<INewsPage> = ({ posts }) => {
	return (
		<MainLayout title={'Users Posts Page'} mainHeader>
			<h1 className={'title'}>User News</h1>
			<div className={'flex flex-col items-center justify-center gap-y-96'}>
				{posts.map(post => (
					<MoreNewsItem post={post} key={post.id} />
				))}
			</div>
		</MainLayout>
	)
}
