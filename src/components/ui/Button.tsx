import React from 'react'
import cn from 'utils/cn'

const Button = React.forwardRef<
	HTMLButtonElement,
	React.HTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => (
	<button
		ref={ref}
		className={cn(
			'h-[41px] w-[170px] rounded-full bg-dark-desaturated-blue',
			'font-extrabold text-pale-blue hover:text-white',
			className
		)}
		type='button'
		{...props}
	>
		{children}
	</button>
))

export default Button
