import { Slider } from 'components/ui/Slider'
import { forwardRef, type HTMLAttributes } from 'react'
import cn from 'utils/cn'

const PriceCardSlider = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('w-full', className)} {...props}>
		<Slider defaultValue={[2]} max={4} />
	</div>
))

export default PriceCardSlider
