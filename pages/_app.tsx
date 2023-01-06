import { AppProps } from 'next/app'
import Layout from '../components/layout'
import '../styles/globals.css'
import {
	QueryClient,
	QueryClientProvider,
	Hydrate,
	QueryClientConfig,
} from 'react-query'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
	const config: QueryClientConfig = {
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	}

	const [queryClient] = useState(() => new QueryClient(config))
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
