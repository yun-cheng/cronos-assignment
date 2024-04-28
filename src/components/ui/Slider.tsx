import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'
import cn from 'utils/cn'
import SliderThumbIcon from '../../icons/SliderThumb.svg?react'

const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
	<SliderPrimitive.Root
		ref={ref}
		className={cn(
			'relative flex h-10 w-full items-center',
			'touch-none select-none',
			'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
			className
		)}
		{...props}
	>
		<SliderPrimitive.Track className='relative h-2 w-full grow cursor-pointer overflow-hidden rounded-full bg-light-grayish-blue'>
			<SliderPrimitive.Range className='absolute h-full bg-light-cyan' />
		</SliderPrimitive.Track>
		<SliderPrimitive.Thumb
			className={cn(
				'flex h-10 w-10 cursor-pointer items-center justify-center',
				'rounded-full bg-strong-cyan shadow-slider-thumb transition-colors',
				'hover:bg-soft-cyan',
				'focus-visible:outline-none',
				'active:cursor-grabbing active:bg-very-strong-cyan'
			)}
		>
			<SliderThumbIcon />
		</SliderPrimitive.Thumb>
	</SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
