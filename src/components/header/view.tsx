'use client';
import { ReactElement } from 'react';
import { useHeader } from './model';

export function Header(): ReactElement {
	const { siteTitle } = useHeader();

	return <header className={'fixed top-0 left-0 w-full z-10'}></header>;
}
