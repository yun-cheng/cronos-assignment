import Header from 'components/Header'
import PricingCard from 'components/PricingCard/PricingCard'
import type { ReactElement } from 'react'
import cn from 'utils/cn'

export default function HomePage(): ReactElement {
	return (
		<div
			className={cn(
				'min-h-screen',
				'bg-background bg-[length:auto_400px] bg-no-repeat sm:bg-very-pale-blue sm:bg-auto',
				'font-semibold text-grayish-blue'
			)}
		>
			<div className='px-6 pb-20 pt-[57px] sm:pt-[67px]'>
				<Header />
				<PricingCard className='mt-8 sm:mt-[54px]' />
			</div>
		</div>
	)
}
