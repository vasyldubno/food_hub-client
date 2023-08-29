import { Box, Container, Typography } from '@mui/material'

export const Footer = () => {
	return (
		<Box className="">
			<Box className="mb-2 h-[1px] w-full bg-yellow-500" />
			<Container className="relative max-w-[1350px]">
				<Box className="flex w-full flex-col items-center justify-center gap-3 py-3 md:flex-row lg:gap-24">
					<Box className="mb-2 flex flex-col items-center">
						<Typography className="font-signika text-3xl">
							Ready to cook?
						</Typography>
						<Typography className="font-signika">
							Sign up for our weekly newsletters!
						</Typography>
					</Box>
					<Box className="flex flex-col sm:flex-row">
						<input
							type="text"
							className="mb-2 h-14 rounded-xl border-2 border-red-500 px-2 pl-4 font-signika text-black placeholder:font-signika placeholder:font-normal placeholder:text-black focus:outline-0 sm:mr-4"
							placeholder="Your email"
						/>
						<button
							type="submit"
							className="h-14 rounded-xl bg-red-500 px-6 font-signika text-white "
						>
							SUBSCRIBE
						</button>
					</Box>
				</Box>
				<Box className="flex w-full items-center justify-center py-3 font-signika">
					&#169; Food Hub 2023 - All Rights Reserved
				</Box>
			</Container>
		</Box>
	)
}
