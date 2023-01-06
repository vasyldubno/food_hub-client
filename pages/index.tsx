import Head from 'next/head'
import { CallToAction } from '../components/CallToAction'
import { Header } from '../components/Header'
import { Recipes } from '../components/Recipes'
import { RecipesByCategory } from '../components/RecipesByCategory'

export default function Page() {
	return (
		<>
			<Head>
				<title>Food Hub</title>
			</Head>
			<Header />
			<RecipesByCategory />
			<CallToAction />
			<Recipes />
		</>
	)
}
