import { Box, Grid } from '@mui/material'
import axios, { AxiosError } from 'axios'
import { url } from 'inspector'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Post } from '../../components/Post'
import { Loader } from '../../components/UI/Loader'
import { Recipe } from '../../types/RecipeInterface'
import { sanityClient } from '../../utils/sanityClient'

export default function Page() {
	const [posts, setPosts] = useState<Recipe[]>([])
	const [error, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState<string | undefined>('')

	const { query } = useRouter()
	const { category } = query

	const { isLoading } = useQuery(
		['posts', category],
		async () => {
			const result = (await sanityClient.fetch(
				`*[_type == 'post' && categories->name == $category]`,
				{ category }
			)) as unknown
			return result as Recipe[]
		},
		{
			enabled: !!category,
			onSuccess(data) {
				setPosts(data)
			},
			onError(err: AxiosError) {
				setError(true)
				setErrorMessage(err?.code)
			},
		}
	)

	return (
		<>
			<Head>
				<title>
					{!Array.isArray(category) &&
						category &&
						`${category.charAt(0).toUpperCase()}${category.slice(1)}`}
				</title>
			</Head>
			{error && <p>Error {errorMessage}</p>}
			{isLoading && (
				<div className="flex justify-center">
					<Loader />
				</div>
			)}
			<Box
				style={{
					backgroundImage: `url('https://res.cloudinary.com/dtkchspyx/image/upload/v1672823818/food_hub/bg_category.jpg')`,
					boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.5)',
				}}
				className="z-50 flex h-[25vh] items-center justify-center bg-cover bg-center bg-no-repeat font-signika text-[3rem] text-white sm:text-9xl"
			>
				{!Array.isArray(category) &&
					category &&
					`${category.charAt(0).toUpperCase()}${category.slice(1)}`}
			</Box>
			<Box className="my-0 mx-auto mt-[40px] mb-14 max-w-7xl">
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{posts.map((post, index) => (
						<Grid item xs={2} sm={4} md={3} key={post._id}>
							<Post recipe={post} />
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	)
}
