import { Box, Grid, Typography } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Recipe } from '../types/RecipeInterface'
import AvTimerIcon from '@mui/icons-material/AvTimer'
import Link from 'next/link'
import { Post } from './Post'
import { motion, useAnimation, useInView } from 'framer-motion'

export const Recipes = () => {
	const [recipes, setRecipes] = useState<Recipe[] | []>([])

	useEffect(() => {
		const fetch = async () => {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/recipes?populate=*`
			)
			setRecipes(response.data.data)
		}
		fetch()
	}, [])

	return (
		<Box className="my-0 mx-auto mt-14 mb-14 max-w-7xl pl-2 pr-2">
			<Box className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{recipes.map((recipe, index) => (
					<Post recipe={recipe} key={index} />
				))}
			</Box>
		</Box>
	)
}
