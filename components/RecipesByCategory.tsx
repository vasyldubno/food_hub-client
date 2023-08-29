import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

interface Category {
	src_image: string
	name: string
}

export const RecipesByCategory = () => {
	const categories: Category[] = [
		{
			src_image:
				'https://res.cloudinary.com/dtkchspyx/image/upload/v1672332931/food_hub/sweets.jpg',
			name: 'Sweets',
		},
		{
			src_image:
				'https://res.cloudinary.com/dtkchspyx/image/upload/v1672332920/food_hub/burgers.jpg',
			name: 'Burgers',
		},
		{
			src_image:
				'https://res.cloudinary.com/dtkchspyx/image/upload/v1672332908/food_hub/drinks.jpg',
			name: 'Drinks',
		},
		{
			src_image:
				'https://res.cloudinary.com/dtkchspyx/image/upload/v1672332897/food_hub/pizzas.jpg',
			name: 'Pizzas',
		},
	]
	return (
		<Box className="my-0 mx-auto mb-14 mt-8 max-w-7xl">
			<Typography
				component="h2"
				className="mb-8 text-center font-signika text-4xl font-bold text-[#3a3a3a]"
			>
				Browse by category
			</Typography>

			<Box className="relative grid grid-cols-2 gap-2 pl-2 pr-2 md:grid-cols-4 xl:gap-6">
				{categories.map((category, index) => (
					<Link
						href={`/categories/${category.name.toLowerCase()}`}
						key={index}
						aria-label={`Go to posts of category ${category.name}`}
					>
						<Box className="relative h-[200px] max-w-[400px] overflow-hidden rounded-xl md:h-[300px] lg:h-[400px]">
							<Image
								src={category.src_image}
								alt="Sweets"
								fill
								sizes="(min-width: 320px) 100vw"
								priority
								className="object-cover"
							/>
							<Typography className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 pb-5 font-signika text-3xl font-semibold text-white">
								{category.name}
							</Typography>
							<Box className="absolute top-10 h-full w-full bg-gradient-to-t from-black via-transparent to-transparent" />
						</Box>
					</Link>
				))}
			</Box>
		</Box>
	)
}
