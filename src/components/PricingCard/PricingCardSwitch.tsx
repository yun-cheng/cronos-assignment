import { Switch } from 'components/ui/Switch'
import { forwardRef, type HTMLAttributes } from 'react'
import cn from 'utils/cn'

const PricingCardSwitch = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn('flex items-center justify-end', className)}
		{...props}
	>
		<div className='sm:-translate-y-px'>Monthly Billing</div>
		<Switch className='ml-[13px] mr-3 sm:ml-[17px] sm:mr-4' />
		<div className={cn('sm:-translate-y-px', 'mr-[5px] sm:mr-[9px]')}>
			Yearly Billing
		</div>
		<div
			className={cn(
				'-translate-y-px',
				'flex h-[19px] w-[42px] items-center justify-center rounded-lg bg-light-grayish-red sm:w-20',
				'text-[10px] font-extrabold text-light-red'
			)}
		>
			<div className='-translate-x-px'>
				<span className='hidden sm:block'>25% discount</span>
				<span className='block sm:hidden'>-25%</span>
			</div>
		</div>
	</div>
))

export default PricingCardSwitch
