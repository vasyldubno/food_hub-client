import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import { FaTiktok } from 'react-icons/fa'

export const Nav = () => {
	return (
		<div className="sticky top-0 z-50 flex h-12 w-full items-center justify-center bg-white p-8 drop-shadow-lg">
			<Box className="absolute left-0 ml-6 items-center justify-center md:relative">
				<Link href={'/'}>
					<Typography className="font-signika text-4xl font-bold text-red-500">
						food hub
					</Typography>
				</Link>
			</Box>
			<Box className="absolute right-0 mr-6 flex gap-3">
				<Link href={'https://www.instagram.com/'} target="_blank">
					<Box className="center flex h-8 w-8 items-center justify-center rounded-lg bg-red-500">
						<InstagramIcon className="fill-white" />
					</Box>
				</Link>
				<Link href={'https://www.facebook.com/'} target="_blank">
					<Box className="center flex h-8 w-8 items-center justify-center rounded-lg bg-red-500">
						<FacebookIcon className="fill-white" />
					</Box>
				</Link>
				<Link href={'https://www.tiktok.com/'} target="_blank">
					<Box className="center flex h-8 w-8 items-center justify-center rounded-lg bg-red-500">
						<FaTiktok className="fill-white" />
					</Box>
				</Link>
			</Box>
		</div>
	)
}
