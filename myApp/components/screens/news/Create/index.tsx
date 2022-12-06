import { FC, useState } from 'react'
import { FirstLayout } from '@/layouts/first'
import { CreateNewsItem } from '@/ScreensComponents/news/Create/Item'
import { UploadField } from '@/GlobalComponents/FormField/Upload'
import { api } from '@/store/api/api'
import { useRouter } from 'next/router'
import { ICreateNews } from '@/ScreensComponents/news/Create/interface'

export const CreateNewsScreen: FC<ICreateNews> = ({ post }) => {
	const { push } = useRouter()

	const [title, setTitle] = useState<string>(post ? post.title : '')
	const [miniText, setMiniText] = useState<string>(
		post ? post.miniText : ''
	)
	const [mainImage, setMainImage] = useState<string>(post ? post.image : '')
	const [description, setDescription] = useState<string>(
		post ? post.description : ''
	)
	const [secondImage, setSecondImage] = useState<string>(
		post ? post.secondImage : ''
	)
	const [content, setContent] = useState<string>(post ? post.content : '')

	const [createPost] = api.useCreatePostMutation()
	const [updatePost] = api.useUpdatePostMutation()

	const onSubmit = async () => {
		const fields = {
			title,
			miniText,
			image: mainImage,
			description,
			secondImage,
			content
		}

		post
			? updatePost({ ...fields, id: post.id })
					.unwrap()
					.then(() => push('/news'))
			: createPost(fields)
					.unwrap()
					.then(() => push('/news'))
	}

	return (
		<FirstLayout title={'Create News'} signHeader>
			<div
				className={
					'ml-auto mr-auto mt-24 w-[600px] h-[700px] bg-gray-700 p-8'
				}
			>
				<h1 className={'text-center font-bold text-2xl mb-10'}>
					{post ? <>Update the Post</> : <>Create News Post</>}
				</h1>
				<div className={'flex flex-col space-y-12'}>
					<CreateNewsItem
						name={'Title'}
						value={title}
						setValue={setTitle}
					/>
					<CreateNewsItem
						name={'Mini Text'}
						value={miniText}
						setValue={setMiniText}
					/>
					<UploadField
						inputName={'Main Image'}
						folder={'post/mainImage'}
						media={mainImage}
						setMedia={setMainImage}
					/>
					<CreateNewsItem
						name={'description'}
						value={description}
						setValue={setDescription}
					/>
					<UploadField
						inputName={'Second Image'}
						folder={'post/secondImage'}
						media={secondImage}
						setMedia={setSecondImage}
					/>
					<CreateNewsItem
						name={'content'}
						value={content}
						setValue={setContent}
					/>
					<button onClick={onSubmit} className={'block btn btn-primary'}>
						LET'S GO
					</button>
				</div>
			</div>
		</FirstLayout>
	)
}
