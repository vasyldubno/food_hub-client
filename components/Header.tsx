import { Box, Input, Typography } from '@mui/material'
import { BiSearchAlt } from 'react-icons/bi'
import { InputSearch } from './InputSearch'

export const Header = () => {
	const categories = ['Burgers', 'Drinks', 'Pizzas', 'Salads', 'Seafood']
	return (
		<>
			<div
				style={{
					backgroundImage: `url('https://res.cloudinary.com/dtkchspyx/image/upload/v1672319408/food_hub/main_bg.jpg')`,
				}}
				className="flex h-[30vh] items-center justify-center bg-cover bg-center bg-no-repeat md:h-[50vh]"
			>
				<Box className="flex flex-col">
					<Typography
						variant="h2"
						component={'h2'}
						className="px-5 font-signika text-5xl font-medium text-white sm:text-6xl"
					>
						Find a Recipe
					</Typography>
					<InputSearch />
				</Box>
			</div>
		</>
	)
}
