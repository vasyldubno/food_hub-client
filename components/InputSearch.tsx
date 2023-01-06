import { useRouter } from 'next/router'
import { ChangeEvent, KeyboardEvent, useState } from 'react'

export const InputSearch = () => {
	const [search, setSearch] = useState('')
	const router = useRouter()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}

	const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			router.push(`/search?search=${search}`)
		}
	}

	return (
		<>
			<input
				type="text"
				className="ml-4 mr-4 h-14 bg-gray-500/50 px-2 font-signika text-white placeholder:font-signika placeholder:font-normal focus:outline-0"
				placeholder="Search..."
				value={search}
				onChange={handleChange}
				onKeyUp={handleKeyUp}
			/>
		</>
	)
}
