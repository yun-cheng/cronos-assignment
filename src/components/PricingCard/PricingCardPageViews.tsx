import { pageViewsAtom } from 'atoms/pricing'
import { useAtomValue } from 'jotai'
import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'
import cn from 'utils/cn'

const PricingCardPageViews = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const pageViews = useAtomValue(pageViewsAtom)

	return (
		<div
			ref={ref}
			className={cn(
				'font-extrabold tracking-[1.7px] sm:text-[14px] sm:tracking-[2px]',
				className
			)}
			{...props}
		>
			{pageViews} PAGEVIEWS
		</div>
	)
})

export default PricingCardPageViews
