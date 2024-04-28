import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'
import cn from 'utils/cn'

const PricingCardPageViews = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			'font-extrabold tracking-[1.7px] sm:text-[14px] sm:tracking-[2px]',
			className
		)}
		{...props}
	>
		100K PAGEVIEWS
	</div>
))

export default PricingCardPageViews
