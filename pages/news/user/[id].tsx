import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { PostService } from '@/services/post'
import { logError } from '@/utils/api/errorTreatment'
import { INewsPage } from '@/ScreensComponents/news/interface'
import { UserNewsScreen } from '@/ScreensComponents/news/User'
import { UserService } from '@/services/user'

const UserNews: NextPage<INewsPage> = props => {
	return <UserNewsScreen {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const users = await UserService.getAll()
		const paths = users.map(({ id }) => ({
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
		const posts = await PostService.getByUser(Number(params?.id))

		return {
			props: {
				posts
			} as INewsPage
		}
	} catch (e) {
		logError(e)
		return {
			props: {
				posts: []
			} as INewsPage
		}
	}
}

export default UserNews
