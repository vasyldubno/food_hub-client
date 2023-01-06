import { useEffect, useState } from 'react'

interface Location {
	lat: number
	lng: number
}

export const useGeo = () => {
	const [location, setLocation] = useState<Location>({ lat: 0, lng: 0 })
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((props) =>
			setLocation({ lat: props.coords.latitude, lng: props.coords.longitude })
		)
	}, [])
	return location
}
