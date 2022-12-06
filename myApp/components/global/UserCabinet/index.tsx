import { FC } from 'react'
import { IUserCabinet } from '@/GlobalComponents/UserCabinet/interface'
import { Avatar } from '@/GlobalComponents/Avatar'
import { useActions } from '@/store/hooks/useActions'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const UserCabinet: FC<IUserCabinet> = ({ data, isCabinet }) => {
	const { push } = useRouter()

	const { fetchLogout } = useActions()

	const onLogout = async () => {
		await fetchLogout()
		await push('/news')
	}

	return (
		<>
			<div className={'title'}>CABINET</div>
			<div
				className={
					'w-[1000px] h-[662px] bg-gray-700/[0.6] p-6 ml-auto mr-auto rounded-xl'
				}
			>
				<div className={'flex flex-col space-y-6'}>
					<div className={'flex space-x-72 items-center'}>
						<div>
							<Avatar url={data.avatar} isRounded />
						</div>
						<div>
							<h1 className={'text-center font-semibold text-3xl mb-6'}>
								{data.userName}
							</h1>
							<h2 className={'text-center font-medium text-2xl mb-6'}>
								{data.email}
							</h2>
							<div
								className={
									'flex space-x-4 ml-auto mr-auto font-medium text-xl mb-8'
								}
							>
								<h3>Roles:</h3>
								<div className={'flex space-x-3'}>
									{data.roles.map(role => (
										<h3 key={role.value}>{role.value}</h3>
									))}
								</div>
							</div>
							<h4>{data.steam}</h4>
							<h4>{data.discord}</h4>
							{isCabinet && (
								<>
									<div className={'flex justify-center'}>
										<button
											onClick={onLogout}
											className={'btn btn-primary'}
										>
											LOGOUT
										</button>
									</div>
									<div>
										<Link href={`/updateProfile`}>
											<button className={'btn btn-primary'}>
												EDIT PROFILE
											</button>
										</Link>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
