import * as SwitchPrimitives from '@radix-ui/react-switch'
import * as React from 'react'
import cn from 'utils/cn'

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={cn(
			'h-[22px] w-[43px]',
			'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
			'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
			'disabled:cursor-not-allowed disabled:opacity-50',
			'data-[state=checked]:bg-soft-cyan data-[state=unchecked]:bg-soft-grayish-blue',
			className
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb
			className={cn(
				'h-[14px] w-[14px]',
				'pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform',
				'data-[state=checked]:translate-x-[23px] data-[state=unchecked]:translate-x-[2px]'
			)}
		/>
	</SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
