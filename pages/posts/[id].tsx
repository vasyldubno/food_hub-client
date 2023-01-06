import axios from 'axios'
import { NextRouter, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Recipe } from '../../types/RecipeInterface'
import ReactMarkdown from 'react-markdown'
import { Box, Container, Typography } from '@mui/material'
import Head from 'next/head'

export default function Page() {
	const [post, setPost] = useState<Recipe>()
	const { query } = useRouter()
	const id = query.id

	useEffect(() => {
		const fetch = async () => {
			const data = await axios.get(
				`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/recipes?filters[id][$eq]=${id}`
			)

			setPost(data.data.data[0])
		}
		fetch()
	}, [id])

	return (
		<>
			<Head>
				<title>{post?.attributes.title}</title>
			</Head>
			<Container maxWidth="sm" className="mb-10">
				{post && (
					<div className="">
						<Box className="pt-14 pb-14 text-center">
							<Typography
								component={'h1'}
								className="font-signika text-5xl font-bold"
							>
								{post.attributes.title}
							</Typography>
						</Box>
						<ReactMarkdown className="text-2xl">
							{post.attributes.description}
						</ReactMarkdown>

						<Box className="mt-5 mb-5 flex justify-center gap-20 bg-[#ebf7fc] p-8 text-center xl:-ml-[300px] xl:w-[calc(100%+300px)]">
							{/* <Box className="flex gap-4"> */}
							<Box>
								<Typography className="font-bold">YIELDS:</Typography>
								<Typography>{post.attributes.yields}</Typography>
							</Box>
							<Box>
								<Typography className="font-bold">PREP TIME:</Typography>
								<Typography>{post.attributes.prep_time}</Typography>
							</Box>
							<Box>
								<Typography className="font-bold">TOTAL TIME:</Typography>
								<Typography>{post.attributes.total_time}</Typography>
							</Box>
						</Box>

						{/* </Box> */}
						<Box className="flex flex-col xl:-ml-[300px] xl:w-[calc(100%+300px)] xl:flex-row">
							<Box className="min-w-[300px] pr-5">
								<Typography className="mb-5 text-3xl font-bold">
									Ingredients
								</Typography>
								<ReactMarkdown className="text-lg">
									{post.attributes.ingredients}
								</ReactMarkdown>
							</Box>
							<Box>
								<Typography className="mt-5 mb-5 text-3xl font-bold xl:mt-0">
									Directions
								</Typography>
								<ReactMarkdown className="text-2xl">
									{post.attributes.steps}
								</ReactMarkdown>
							</Box>
						</Box>
					</div>
				)}
			</Container>
		</>
	)
}
