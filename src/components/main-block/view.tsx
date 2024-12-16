'use client';
import { ReactElement } from 'react';
import { Button } from '@/library/shadcn';

export function MainBlock(): ReactElement {
	return (
		<section className={'h-[400px] md:h-[600px] xl:h-[810px] relative mb-8 lg:mb-[89px]'}>
			<picture
				className={
					"w-full h-full z-0 bg-gradient-to-b from-[#000000CC] via-[#1F0C0ACC] via-80% to-[#471E1ACC] after:content-['*'] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-20 after:bg-black after:opacity-20"
				}
			>
				<img
					src={'/static/main-block/image.jpg'}
					width={1440}
					height={810}
					alt={'main-block'}
					className={'w-full h-full object-cover opacity-50'}
				/>
			</picture>
			<div className={'absolute top-0 left-0 w-full h-full z-10 flex items-center'}>
				<div className={'w-full'}>
					<div
						className={
							"w-full px-[158px] font-['Bebas_Neue'] text-[40px] md:text-[80px] xl:text-[120px] leading-[0.92] text-center md:text-left bottom-10"
						}
					>
						<div>Victoria</div>
						<div>Bianchini</div>
					</div>
				</div>
			</div>
		</section>
	);
}
