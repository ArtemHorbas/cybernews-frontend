import { ChangeEvent, FC, useRef } from 'react'
import { IUploadFile } from '@/GlobalComponents/FormField/Upload/interface'
import Image from 'next/image'
import { api } from '@/store/api/api'

export const UploadField: FC<IUploadFile> = ({
	inputName,
	folder,
	media,
	setMedia
}) => {
	const ref = useRef<HTMLInputElement>(null)

	const [uploadMedia] = api.useUploadMediaMutation()

	const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files

		if (!files?.length) return

		const formData = new FormData()
		formData.append('media', files[0])

		await uploadMedia({ formData, folder })
			.unwrap()
			.then(res => setMedia(res.url))
	}

	return (
		<div className={'flex items-center justify-between'}>
			<div className={'font-bold'}>{inputName}</div>
			<div onClick={() => ref.current?.click()}>
				<input
					type="file"
					className="file-input file-input-bordered w-full max-w-xs"
					ref={ref}
					onChange={uploadFile}
				/>
			</div>
			{media && (
				<Image
					src={`http://localhost:3000${media}`}
					alt={'Media'}
					width={70}
					height={70}
				/>
			)}
		</div>
	)
}
