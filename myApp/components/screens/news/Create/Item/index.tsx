import { FC } from 'react'
import { ICreateNewsItem } from '@/ScreensComponents/news/Create/Item/interface'

export const CreateNewsItem: FC<ICreateNewsItem> = ({
	name,
	value,
	setValue
}) => {
	return (
		<div className={'flex items-center justify-between'}>
			<p className={'block'}>{name}</p>
			<input
				type="text"
				placeholder="Type here"
				value={value}
				onChange={e => setValue(e.target.value)}
				className="input input-bordered input-sm w-full max-w-xs"
			/>
		</div>
	)
}
