import Button from 'components/ui/Button'
import { forwardRef, type HTMLAttributes } from 'react'
import cn from 'utils/cn'
import CheckIcon from '../../icons/Check.svg?react'

const PricingCardFooterContent = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			'w-full',
			'-translate-x-0.5 sm:translate-x-0',
			'flex flex-col items-center justify-between gap-[33px] sm:flex-row sm:gap-0',
			className
		)}
		{...props}
	>
		<div className='flex flex-col items-center gap-[11px] sm:items-start'>
			{['Unlimited websites', '100% data ownership', 'Email reports'].map(
				text => (
					<span
						key={text}
						className={cn('translate-y-px', 'flex items-center gap-[15px]')}
					>
						<CheckIcon />
						{text}
					</span>
				)
			)}
		</div>
		<Button>
			<span className={cn('translate-y-px', 'flex justify-center')}>
				Start my trial
			</span>
		</Button>
	</div>
))

export default PricingCardFooterContent
