import { AppProps } from 'next/app'
import Layout from '../components/layout'
import '../styles/globals.css'
import {
	QueryClient,
	QueryClientProvider,
	Hydrate,
	QueryClientConfig,
} from 'react-query'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
	const config: QueryClientConfig = {
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	}

	const [queryClient] = useState(() => new QueryClient(config))

	useEffect(() => {
		if ('serviceWorker' in navigator) {
			window.addEventListener('load', function () {
				navigator.serviceWorker.register('/sw.js').then(
					function (registration) {
						console.log(
							'Service Worker registration successful with scope: ',
							registration.scope
						)
					},
					function (err) {
						console.log('Service Worker registration failed: ', err)
					}
				)
			})
		}
	}, [])

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps.dehydratedState}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Hydrate>
			</QueryClientProvider>
		</>
	)
}

export default MyApp
