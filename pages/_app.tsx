import '@/assets/styles/global.scss'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { Provider } from 'react-redux'
import { persistor, store } from '@/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import ReduxToastr from 'react-redux-toastr'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextNProgress
				color="#3F3F3F"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
			/>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<Component {...pageProps} />
					<ReduxToastr
						newestOnTop={false}
						preventDuplicates
						progressBar
						closeOnToastrClick
						timeOut={3500}
						transitionIn={'fadeIn'}
						transitionOut={'fadeOut'}
					/>
				</PersistGate>
			</Provider>
		</>
	)
}

export default MyApp
