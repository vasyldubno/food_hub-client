import { LayoutProps } from '../types/layoutProps'
import { Footer } from './Footer'
import { Nav } from './Nav'

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Nav />
			{children}
			<Footer />
		</>
	)
}

export default Layout
