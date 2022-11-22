import { FC } from 'react'
import { MainLayout } from '@/layouts/main'

export const MatchesScreen: FC = () => {
	return (
		<MainLayout title={'Matches Page'} mainHeader matchesHeader>
			MATCHES
		</MainLayout>
	)
}
