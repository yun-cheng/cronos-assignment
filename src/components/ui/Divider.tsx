import React from 'react'
import cn from 'utils/cn'

const Divider = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn('h-px w-full bg-divider', className)}
		{...props}
	/>
))

export default Divider
