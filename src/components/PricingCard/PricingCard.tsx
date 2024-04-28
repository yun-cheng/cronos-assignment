import { Card, CardContent, CardFooter } from 'components/ui/Card'
import Divider from 'components/ui/Divider'
import type { ReactElement } from 'react'
import PricingCardFooterContent from './PricingCardFooterContent'
import PricingCardPageViews from './PricingCardPageViews'
import PricingCardPrice from './PricingCardPrice'
import PriceCardSlider from './PricingCardSlider'
import PricingCardSwitch from './PricingCardSwitch'

export default function PricingCard(): ReactElement {
	return (
		<Card className='mx-auto max-w-[540px]'>
			<CardContent className='px-6 pb-[38px] pt-[35px] sm:p-12 sm:pb-10'>
				<div className='flex flex-col items-center sm:flex-row sm:items-start sm:justify-between'>
					<PricingCardPageViews className='sm:mt-3 sm:-translate-x-[3px]' />
					<PriceCardSlider className='mt-6 sm:hidden' />
					<PricingCardPrice className='mt-[30px] sm:mt-0' />
				</div>
				<PriceCardSlider className='mt-2 hidden sm:block' />
				<PricingCardSwitch className='-mr-[13px] mt-[22px] sm:mr-[17px] sm:mt-10' />
			</CardContent>
			<Divider />
			<CardFooter className='px-0 pb-8 pt-6 sm:pb-[33px] sm:pl-[47px] sm:pr-[44px] sm:pt-8'>
				<PricingCardFooterContent />
			</CardFooter>
		</Card>
	)
}
