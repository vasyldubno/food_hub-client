import { Box, Grid } from '@mui/material'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Post } from '../components/Post'
import { Recipe } from '../types/RecipeInterface'
import { sanityClient } from '../utils/sanityClient'

export default function Page() {
	const router = useRouter()
	const { search } = router.query
	const [recipes, setRecipes] = useState<Recipe[]>([])

	const { isLoading } = useQuery(
		['', search],
		async () => {
			const result =
				(await sanityClient.fetch(`*[_type == "post" && title match "*${search}*" || categories->name match "*${search}*"]{
				categories->{
					name
				},
				title,
				description,
				ingredients,
				steps,
				author,
				yields,
				prep_time,
				total_time,
				image,
				_id
			}`)) as unknown
			return result as Recipe[]
		},
		{
			enabled: !!search,
			onSuccess(data) {
				setRecipes(data)
			},
		}
	)

	return (
		<>
			<Head>
				<title>Search | Just Recipe</title>
			</Head>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<Box className="my-0 mx-auto mt-5 mb-5 max-w-7xl px-2">
					<Grid
						container
						spacing={{ xs: 2, sm: 3 }}
						columns={{ xs: 4, sm: 8, md: 12 }}
					>
						{recipes.map((recipe, index) => (
							<Grid item xs={12} sm={4} md={4} key={index}>
								<Post recipe={recipe} />
							</Grid>
						))}
					</Grid>
				</Box>
			)}
		</>
	)
}
