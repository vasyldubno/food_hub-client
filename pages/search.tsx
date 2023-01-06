import { Box, Grid } from '@mui/material'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Post } from '../components/Post'
import { Recipe } from '../types/RecipeInterface'

export default function Page() {
	const router = useRouter()
	const search = router.query.search
	const [recipes, setRecipes] = useState<Recipe[]>([])

	const { isLoading } = useQuery(
		['', search],
		async () => {
			return await axios.get(
				`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/recipes?populate=*&filters[title][$containsi]=${search}`
			)
		},
		{
			enabled: !!search,
			onSuccess(data) {
				setRecipes(data.data.data)
			},
		}
	)

	return (
		<>
			<Head>
				<title>Search</title>
			</Head>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<Box className="my-0 mx-auto mt-[100px] mb-14 max-w-7xl">
					<Grid
						container
						spacing={{ xs: 2, md: 3 }}
						columns={{ xs: 4, sm: 8, md: 12 }}
					>
						{recipes.map((recipe, index) => (
							<Grid item xs={2} sm={4} md={3} key={index}>
								<Post recipe={recipe} />
							</Grid>
						))}
					</Grid>
				</Box>
			)}
		</>
	)
}
