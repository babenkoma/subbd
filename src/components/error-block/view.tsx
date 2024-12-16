'use client';
import { ReactElement } from 'react';

export function ErrorBlock(): ReactElement {
	return (
		<section>
			<h1>Error</h1>
			<button onClick={() => window.location.reload()}>Reload</button>
		</section>
	);
}
