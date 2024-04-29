import { planIdAtom } from 'atoms/pricing'
import { Slider } from 'components/ui/Slider'
import { useAtom } from 'jotai'
import { forwardRef, type HTMLAttributes } from 'react'
import cn from 'utils/cn'

const PriceCardSlider = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const [planId, setPlanId] = useAtom(planIdAtom)

	const onValueChange = (value: number[]) => {
		setPlanId(value[0])
	}

	return (
		<div ref={ref} className={cn('w-full', className)} {...props}>
			<Slider value={[planId]} max={4} onValueChange={onValueChange} />
		</div>
	)
})

export default PriceCardSlider
