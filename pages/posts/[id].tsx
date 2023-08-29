import { Box, Container, Typography } from '@mui/material'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Loader } from '../../components/UI/Loader'
import { Recipe } from '../../types/RecipeInterface'
import { sanityClient } from '../../utils/sanityClient'

export default function Page() {
	const [post, setPost] = useState<Recipe>()
	const { query } = useRouter()
	const { id } = query

	const { isLoading } = useQuery(
		['post', id],
		async () => {
			const result = (await sanityClient.fetch(`*[_id == "${id}"]{
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
			enabled: id !== undefined,
			onSuccess(data) {
				setPost(data[0])
			},
		}
	)

	return (
		<>
			<Head>
				<title>{post?.title}</title>
			</Head>
			<Container maxWidth="sm" className="mb-10">
				{isLoading ? (
					<div className="flex justify-center">
						<Loader />
					</div>
				) : post ? (
					<div className="">
						<Box className="pt-14 pb-14 text-center">
							<Typography
								component="h1"
								className="font-signika text-5xl font-bold text-black"
							>
								{post.title}
							</Typography>
						</Box>

						{post.description.map((item) => (
							<div key={item._key}>
								{item.children.map((item) => (
									<p className="text-2xl" key={item._key}>
										{item.text}&nbsp;
									</p>
								))}
							</div>
						))}

						<Box className="mt-5 mb-5 flex justify-center gap-20 bg-[#ebf7fc] p-8 text-center xl:-ml-[300px] xl:w-[calc(100%+300px)]">
							<Box>
								<Typography className="font-bold">YIELDS:</Typography>
								<Typography>{post.yields}</Typography>
							</Box>
							<Box>
								<Typography className="font-bold">PREP TIME:</Typography>
								<Typography>{post.prep_time}</Typography>
							</Box>
							<Box>
								<Typography className="font-bold">TOTAL TIME:</Typography>
								<Typography>{post.total_time}</Typography>
							</Box>
						</Box>

						<Box className="flex flex-col xl:-ml-[300px] xl:w-[calc(100%+300px)] xl:flex-row">
							<Box className="min-w-[300px] pr-5">
								<Typography className="mb-5 text-3xl font-bold">
									Ingredients
								</Typography>
								{post.ingredients.map((ingredient) => (
									<div key={ingredient._key}>
										{ingredient.children.map((item) => {
											return (
												<p
													key={item._key}
													className={`${
														item.marks.includes('strong') && 'font-bold'
													} inline text-lg`}
												>
													{item.text}&nbsp;
												</p>
											)
										})}
									</div>
								))}
							</Box>
							<Box>
								<Typography className="mt-5 mb-5 text-3xl font-bold xl:mt-0">
									Directions
								</Typography>
								{post.steps.map((step) => {
									const h4 = step.style === 'h4'
									return (
										<div key={step._key}>
											{step.children.map((item) => (
												<p
													className={`${
														item.marks.includes('strong') && 'font-bold'
													} ${h4 ? 'text-2xl' : 'text-lg'}`}
													key={step._key}
												>
													{item.text}&nbsp;
												</p>
											))}
										</div>
									)
								})}
							</Box>
						</Box>
					</div>
				) : (
					<p>ERROR</p>
				)}
			</Container>
		</>
	)
}
