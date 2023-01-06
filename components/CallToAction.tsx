import { Box, Button, Typography } from '@mui/material'

export const CallToAction = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center bg-red-600 p-3 text-center lg:flex-row">
				<Typography className="mr-8 p-5 font-signika text-2xl font-normal text-white">
					Get our latest recipes and expert tips right in your inbox
				</Typography>
				<Box>
					<input
						type="text"
						className="h-14 rounded-xl bg-white px-2 pl-4 font-signika text-black placeholder:font-signika placeholder:font-normal placeholder:text-black focus:outline-0"
						placeholder="Your email"
					/>
					<button
						type="submit"
						className="ml-5 h-14 rounded-xl bg-white px-6 font-signika"
					>
						SUBSCRIBE
					</button>
				</Box>
			</div>
		</>
	)
}
