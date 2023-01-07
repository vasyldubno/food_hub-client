import { Cherry_Swash } from '@next/font/google'

const cherry = Cherry_Swash({
	subsets: ['latin'],
	weight: '700',
})

export default function Page() {
	return (
		<>
			<p className={`text-4xl text-red-300`}>Test</p>
		</>
	)
}
