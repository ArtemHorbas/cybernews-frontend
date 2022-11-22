import { GetStaticProps, NextPage } from 'next'
import { NewsScreen } from '@/ScreensComponents/news'
import { INewsPage } from '@/ScreensComponents/news/interface'
import { PostService } from '@/services/post'

const News: NextPage<INewsPage> = props => {
	return <NewsScreen {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const popularPosts = await PostService.getPopular()

		return {
			props: {
				posts: popularPosts
			} as INewsPage
		}
	} catch (e) {
		return {
			props: {
				posts: []
			} as INewsPage
		}
	}
}

export default News
