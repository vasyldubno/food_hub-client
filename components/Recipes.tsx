import { Box } from '@mui/material'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Recipe } from '../types/RecipeInterface'
import { sanityClient } from '../utils/sanityClient'
import { Post } from './Post'

export const Recipes = () => {
	const [recipes, setRecipes] = useState<Recipe[] | []>([])

	const { isLoading } = useQuery(
		'',
		async () => {
			const result = (await sanityClient.fetch(`*[_type == "post"]{
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
			onSuccess(data) {
				setRecipes(data)
			},
		}
	)

	return (
		<Box className="my-0 mx-auto mt-14 mb-14 max-w-7xl pl-2 pr-2">
			<Box className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{isLoading ? (
					<p>LOADING...</p>
				) : (
					recipes.map((recipe, index) => <Post recipe={recipe} key={index} />)
				)}
			</Box>
		</Box>
	)
}
