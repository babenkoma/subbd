'use client';
import Link from 'next/link';
import { ReactElement } from 'react';

export function NotFound(): ReactElement {
	return (
		<section>
			<h1>Page not found</h1>
			<Link href={'/'}>Home</Link>
		</section>
	);
}
