import { Box, Button, Typography } from '@mui/material'
import s from './styles.module.scss'

export const CallToAction = () => {
	return (
		<div className="bg-red-600">
			<div
				className="flex max-w-7xl flex-col items-center justify-center  gap-5 p-5 text-center lg:flex-row lg:justify-around"
				style={{ margin: '0 auto' }}
			>
				<Typography className="font-signika text-xl font-normal text-white sm:max-w-[500px] sm:text-3xl">
					Get our latest recipes and expert tips right in your inbox
				</Typography>
				<Box className={s.formWrapper}>
					<input
						type="text"
						className="h-14 rounded-xl bg-white px-2 pl-4 font-signika text-black placeholder:font-signika placeholder:font-normal placeholder:text-black focus:outline-0"
						placeholder="Your email"
					/>
					<button type="submit" className={s.button}>
						SUBSCRIBE
					</button>
				</Box>
			</div>
		</div>
	)
}
