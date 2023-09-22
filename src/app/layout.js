import './styles/globals.css'
import './styles/layout.css'
import "normalize.css"
import { ptsans } from "./styles/fonts"

export const metadata = {
	title: 'Direct Vehicle Rentals',
	description: 'Direct Vehicle Rentals',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={ptsans.className}>{children}</body>
		</html>
	)
}
