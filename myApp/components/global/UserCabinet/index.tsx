import { FC } from 'react'
import { IUserCabinet } from '@/GlobalComponents/UserCabinet/interface'

export const UserCabinet: FC<IUserCabinet> = ({ data }) => {
	return (
		<>
			<div className={'title'}>CABINET</div>
			<div
				className={
					'w-[1000px] h-[662px] bg-gray-700/[0.6] p-6 ml-auto mr-auto rounded-xl'
				}
			>
				<div className={'flex flex-col space-y-6'}>
					<h1 className={'text-center font-semibold text-2xl'}>
						{data.userName}
					</h1>
					<h2 className={'text-center font-medium text-xl'}>
						{data.email}
					</h2>
					<div
						className={'flex space-x-4 ml-auto mr-auto font-medium text-xl'}
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
				</div>
			</div>
		</>
	)
}
