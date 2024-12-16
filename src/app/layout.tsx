import { ReactElement } from 'react';
import { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Poppins, Bebas_Neue } from 'next/font/google';
import { LayoutProps } from '@/app/types';
import '@/library/shadcn/styles.css';

const poppins = Poppins({
	weight: ['400', '500'],
	style: 'normal',
	subsets: ['latin'],
	display: 'swap',
});
const bebasNeue = Bebas_Neue({
	weight: ['400'],
	style: 'normal',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	formatDetection: {
		telephone: false,
	},
	appleWebApp: {
		capable: true,
	},
	icons: {
		icon: [
			{ rel: 'icon', type: 'image/png', sizes: '96x96', url: '/favicons/favicon-96x96.png' },
			{ rel: 'icon', type: 'image/x-icon', url: '/favicon.ico' },
			{ rel: 'shortcut icon', url: '/favicon.ico' },
		],
		apple: { rel: 'apple-touch-icon', sizes: '180x180', url: '/favicons/apple-touch-icon.png' },
	},
	manifest: '/favicons/site.webmanifest',
	openGraph: {
		images: [{ url: '/static/og-image.jpg' }],
	},
};

export default async function RootLayout({ children }: LayoutProps): Promise<ReactElement> {
	return (
		<html
			lang={'en'}
			className={`dark bg-background text-foreground h-full ${bebasNeue.className}`}
			suppressHydrationWarning
		>
			<body className={`max-w-[1440px] w-full mx-auto min-h-full flex flex-col ${poppins.className}`}>
				<NextTopLoader color="#006FFF" shadow="none" showSpinner={false} />
				{children}
			</body>
		</html>
	);
}
