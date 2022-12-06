import { FC } from 'react'
import Image from 'next/image'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import Link from 'next/link'
import { IPost } from '@/types/post/interface'
import { useCheckAccess } from '@/hooks/useCheckAccess'

dayjs.extend(LocalizedFormat)

export const NewsItem: FC<{ post: IPost }> = ({ post }) => {
	return (
		<div className={'relative w-[358px] h-[386px] rounded-xl bg-[#151515]'}>
			<Link href={`/news/${post.id}`}>
				<Image
					src={`http://localhost:3000${post.image}`}
					alt={'ALTUSHKA'}
					width={368}
					height={188}
				/>
			</Link>
			<div className={'flex justify-between items-center px-4'}>
				<p>{dayjs(post.createdAt).format('L LT')}</p>
				<div className={'flex space-x-3 items-center'}>
					<p>{post.views}</p>
					<Image
						src={'/helpIcons/viewsIcon.svg'}
						alt={'Inst'}
						width={25}
						height={25}
					/>
				</div>
			</div>
			<h1 className={'text-center text-xl my-4 font-bold'}>{post.title}</h1>
			<p className={'text-center text-sm font-medium'}>{post.miniText}</p>
			{useCheckAccess() && (
				<Link
					href={`/news/update/${post.id}`}
					className={'absolute right-2 bottom-2'}
				>
					<button className={'btn btn-primary'}>EDIT</button>
				</Link>
			)}
		</div>
	)
}
