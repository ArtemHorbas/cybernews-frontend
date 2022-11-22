import { GetStaticProps, NextPage } from 'next'
import { INewsPage } from '@/ScreensComponents/news/interface'
import { PostService } from '@/services/post'
import { MoreNewsScreen } from '@/ScreensComponents/news/More'

const MoreNews: NextPage<INewsPage> = props => {
	return <MoreNewsScreen {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const newPosts = await PostService.getNewest()

		return {
			props: {
				posts: newPosts
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

export default MoreNews
