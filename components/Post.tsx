import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import AvTimerIcon from '@mui/icons-material/AvTimer'
import { Recipe } from '../types/RecipeInterface'
import { FC, useEffect, useRef } from 'react'
import {
	motion,
	useAnimation,
	useAnimationControls,
	useInView,
} from 'framer-motion'

interface Post {
	recipe: Recipe
}

export const Post: FC<Post> = ({ recipe }) => {
	const ref = useRef(null)

	const isInView = useInView(ref, {
		amount: 0.1,
		once: true,
	})

	return (
		<>
			<motion.div ref={ref}>
				<Box
					className={
						isInView
							? 'scale-100 opacity-100 transition-all duration-300'
							: 'scale-0 opacity-0'
					}
				>
					<Box className="ml-2">
						<Link href={`/posts/${recipe.id}`}>
							<Box className="relative h-[200px] overflow-hidden rounded-xl md:h-[300px] lg:h-[300px]">
								<Image
									src={`${recipe?.attributes?.cover?.data?.attributes?.url}`}
									alt="recipe"
									fill
									sizes="(min-width: 320px) 100vw"
									priority
									className=" object-cover duration-300 hover:scale-110 hover:duration-300"
								/>
							</Box>

							<Typography className="pt-3 font-signika text-xl font-semibold">
								{recipe.attributes.title}
							</Typography>
							<Box className="pt-1">
								<Box className="flex items-center gap-3">
									<AvTimerIcon />
									<Typography className="font-ubuntu text-base font-normal">
										{recipe.attributes.total_time}
									</Typography>
								</Box>
							</Box>
						</Link>
					</Box>
				</Box>
			</motion.div>
		</>
	)
}
