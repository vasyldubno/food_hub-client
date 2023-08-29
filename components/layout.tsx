import { LayoutProps } from '../types/layoutProps'
import { Footer } from './Footer'
import { Nav } from './Nav'

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="flex min-h-screen flex-col">
			<div className="flex-shrink-0 flex-grow-0">
				<Nav />
			</div>
			<div className="w-full flex-grow">{children}</div>
			<div className="flex-shrink-0 flex-grow-0">
				<Footer />
			</div>
		</div>
	)
}

export default Layout
