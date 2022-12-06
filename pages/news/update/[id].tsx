import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { CreateNewsScreen } from '@/ScreensComponents/news/Create'
import { PostService } from '@/services/post'
import { logError } from '@/utils/api/errorTreatment'
import { IPost } from '@/types/post/interface'

const UpdateNewsPage: NextPage<{ post: IPost }> = props => {
	return <CreateNewsScreen {...props} />
}

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
		const post = await PostService.getOneWithoutViews(Number(params?.id))

		return {
			props: {
				post
			}
		}
	} catch (e) {
		logError(e)
		return {
			props: {
				post: {} as IPost
			}
		}
	}
}

export default UpdateNewsPage
