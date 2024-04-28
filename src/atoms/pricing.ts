import { atom } from 'jotai'

const planPricing = [
	{
		pageViews: '10K',
		price: 8
	},
	{
		pageViews: '50K',
		price: 12
	},
	{
		pageViews: '100K',
		price: 16
	},
	{
		pageViews: '500K',
		price: 24
	},
	{
		pageViews: '1M',
		price: 36
	}
]

export const planIdAtom = atom(2)

export const isYearlyBillingAtom = atom(false)

export const pageViewsAtom = atom(get => planPricing[get(planIdAtom)].pageViews)

export const priceAtom = atom(get => {
	return (
		planPricing[get(planIdAtom)].price * (get(isYearlyBillingAtom) ? 0.75 : 1)
	)
})
