import { Box, Grid } from '@mui/material'
import axios, { AxiosError } from 'axios'
import { url } from 'inspector'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Post } from '../../components/Post'
import { Recipe } from '../../types/RecipeInterface'

export default function Page() {
	const [posts, setPosts] = useState<Recipe[]>([])
	const [error, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState<string | undefined>('')

	const { query } = useRouter()
	const category = query.category as string

	const { isLoading } = useQuery(
		['posts', category],
		async () => {
			return await axios.get(
				`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/recipes?populate=*&filters[category][$eq]=${category}`
			)
		},
		{
			enabled: !!category,
			onSuccess(data) {
				setPosts(data?.data?.data)
			},
			onError(err: AxiosError) {
				setError(true)
				setErrorMessage(err?.code)
			},
		}
	)

	console.log(posts)

	return (
		<>
			<Head>
				<title>{category?.charAt(0).toUpperCase() + category?.slice(1)}</title>
			</Head>
			{error && <p>Error</p>}
			{isLoading && <p>Loading...</p>}
			<Box
				style={{
					backgroundImage: `url('https://res.cloudinary.com/dtkchspyx/image/upload/v1672823818/food_hub/bg_category.jpg')`,
					boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.5)',
				}}
				className="z-50 flex h-[25vh] items-center justify-center bg-cover bg-center bg-no-repeat font-signika text-9xl text-white"
			>
				{category?.charAt(0).toUpperCase() + category?.slice(1)}
			</Box>
			<Box className="my-0 mx-auto mt-[100px] mb-14 max-w-7xl">
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{posts.map((post, index) => (
						<Grid item xs={2} sm={4} md={3} key={index}>
							<Post recipe={post} />
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	)
}
