'use client';
import { ReactElement } from 'react';
import { useFooter } from './model';

export function Footer(): ReactElement {
	const { copyright } = useFooter();

	return (
		<footer className={'flex-shrink m-5 lg:ml-[44px] lg:mr-[35px] lg:mb-[54px]'}>
			<div className={'text-[13px] font-[500] text-[#FFFFFF4D] text-center'}>
				Copyright {copyright} {new Date().getFullYear()} SUBBD. All rights reserved.
			</div>
		</footer>
	);
}
