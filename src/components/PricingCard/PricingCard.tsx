import { Card, CardContent } from 'components/ui/Card'
import Divider from 'components/ui/Divider'
import type { ReactElement } from 'react'
import PricingCardPageViews from './PricingCardPageViews'
import PriceCardSlider from './PricingCardSlider'

export default function PricingCard(): ReactElement {
	return (
		<Card className='mx-auto max-w-[540px]'>
			<CardContent className='px-6 pt-[35px] sm:p-12'>
				<div className='flex flex-col items-center sm:flex-row sm:items-start'>
					<PricingCardPageViews className='sm:mt-3 sm:-translate-x-[3px]' />
					<PriceCardSlider className='mt-6 sm:hidden' />
				</div>
				<PriceCardSlider className='hidden sm:block' />
			</CardContent>
			<Divider />
		</Card>
	)
}
