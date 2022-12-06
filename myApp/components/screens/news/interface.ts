import { IPost } from '@/types/post/interface'

export interface INewsPage {
	posts: IPost[]
	theMostPopularPost?: IPost
}
