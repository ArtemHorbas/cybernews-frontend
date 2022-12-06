import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { logError } from '@/utils/api/errorTreatment'
import { UserService } from '@/services/user'
import { IUser } from '@/types/user/interface'
import { IUserPage } from '@/ScreensComponents/user/interface'
import { UserScreen } from '@/ScreensComponents/user'

const UserPage: NextPage<IUserPage> = props => {
	return <UserScreen {...props} />
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
		const user = await UserService.getOne(Number(params?.id))

		return {
			props: {
				user
			} as IUserPage
		}
	} catch (e) {
		logError(e)
		return {
			props: {
				user: {} as IUser
			} as IUserPage
		}
	}
}

export default UserPage
