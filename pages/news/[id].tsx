import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { FullNewsScreen } from '@/ScreensComponents/news/FullNews'
import { IFullNews } from '@/ScreensComponents/news/FullNews/interface'
import { PostService } from '@/services/post'
import { logError } from '@/utils/api/errorTreatment'
import { IPost } from '@/types/post/interface'

const FullNews: NextPage<IFullNews> = props => {
	return <FullNewsScreen {...props} />
}

export default FullNews

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const posts = await PostService.getNewest()
		const paths = posts.map(({ id }) => ({
			params: {
				id: id.toString()
			}
		}))

		return {
			paths,
			fallback: 'blocking'
		}
	} catch (e) {
		logError(e)
		return {
			paths: [],
			fallback: false
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const post = await PostService.getOne(Number(params?.id))

		return {
			props: {
				post
			} as IFullNews
		}
	} catch (e) {
		logError(e)
		return {
			props: {
				post: {} as IPost
			} as IFullNews
		}
	}
}

//getSTATIC
