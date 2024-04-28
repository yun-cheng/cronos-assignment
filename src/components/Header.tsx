import type { ReactElement } from 'react'
import cn from 'utils/cn'

export default function Header(): ReactElement {
	return (
		<div className={cn('h-[145px]', 'bg-circles bg-center bg-no-repeat')}>
			<div
				className={cn(
					'-translate-x-px sm:-translate-y-px sm:translate-x-0',
					'flex h-full flex-col items-center justify-center'
				)}
			>
				<h2 className='text-[20px]/[27px] font-extrabold text-dark-desaturated-blue sm:text-[28px]/[38px]'>
					Simple, traffic-based pricing
				</h2>
				<span
					className={cn(
						'pt-2 sm:pt-3',
						'whitespace-pre-line text-center sm:whitespace-normal',
						'text-[13px]/[23px] sm:text-[15px]/[20px]'
					)}
				>{`Sign-up for our 30-day trial.\nNo credit card required.`}</span>
			</div>
		</div>
	)
}
