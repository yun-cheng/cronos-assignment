import Header from 'components/Header'
import PricingCard from 'components/PricingCard/PricingCard'
import type { ReactElement } from 'react'
import cn from 'utils/cn'

export default function HomePage(): ReactElement {
	return (
		<div
			className={cn(
				'min-h-screen px-6',
				'bg-background bg-[length:auto_400px] bg-no-repeat sm:bg-very-pale-blue sm:bg-auto',
				'font-semibold text-grayish-blue'
			)}
		>
			<div className='pt-[57px] sm:pt-[67px]'>
				<Header />
			</div>
			<div className='pt-8 sm:pt-[54px]'>
				<PricingCard />
			</div>
		</div>
	)
}
