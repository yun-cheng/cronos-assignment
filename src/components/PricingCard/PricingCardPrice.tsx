import { priceAtom } from 'atoms/pricing'
import { useAtomValue } from 'jotai'
import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'
import cn from 'utils/cn'

const PricingCardPrice = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const price = useAtomValue(priceAtom)

	return (
		<div ref={ref} className={className} {...props}>
			<div
				className={cn(
					'-translate-x-px',
					'flex items-center gap-[10px] sm:gap-2'
				)}
			>
				<span className='text-[32px] font-extrabold leading-none -tracking-[.8px] text-dark-desaturated-blue sm:text-[40px] sm:-tracking-[1px]'>
					${price}.00
				</span>
				<span
					className={cn(
						'translate-y-px sm:translate-y-0',
						'text-[14px] sm:text-[16px]'
					)}
				>
					/ month
				</span>
			</div>
			<div
				className={cn(
					'mt-[2px] flex justify-end sm:mt-[7px]',
					'whitespace-pre-wrap text-[10px] tracking-[.2px] sm:text-[14px] sm:-tracking-[.4px]'
				)}
			>
				{`or ~32 CRO `}
				<span className='-translate-x-px sm:translate-x-0'>/ month</span>
			</div>
		</div>
	)
})

export default PricingCardPrice
