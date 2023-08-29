import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'

export const BackToTop = () => {
	const [isShow, setIsShow] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			window.scrollY > 300 ? setIsShow(true) : setIsShow(false)
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const backToTop = () => {
		scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<>
			{isShow && (
				<Box className="fixed bottom-5 right-7 z-10">
					<Box onClick={backToTop}>
						<BsFillArrowUpSquareFill className="h-6 w-6 cursor-pointer lg:h-12 lg:w-12" />
					</Box>
				</Box>
			)}
		</>
	)
}
