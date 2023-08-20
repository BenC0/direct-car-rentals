import { Oswald, PT_Sans } from 'next/font/google'

export const oswald = Oswald({
	subsets: ['latin'],
	display: 'swap',
})

export const ptsans = PT_Sans({
	subsets: ['latin'],
	display: 'swap',
	weight: ["400", "700"]
})