import { ReactElement } from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { MainLayout } from '@/layouts/main';
import { PageProps } from '@/app/types';
import { MainBlock } from '@/components/main-block';

interface Props {
	h1: string;
}

async function getData(): Promise<Props> {
	return {
		h1: 'Home',
	};
}

export async function generateMetadata(props: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	const previousImages = (await parent).openGraph?.images || [];
	const title = 'Home';
	const description = 'Home';

	return {
		title: title,
		description: description,
		openGraph: {
			title: title,
			description: description,
			images: [...previousImages],
		},
	};
}

export default async function Page(): Promise<ReactElement> {
	const { h1 } = await getData();

	return (
		<MainLayout>
			<MainBlock />
		</MainLayout>
	);
}
