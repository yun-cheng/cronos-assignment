import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PricingCardSwitch from 'components/PricingCard/PricingCardSwitch'
import { expect } from 'vitest'

describe('<PricingCardSwitch />', () => {
	it('should render', async () => {
		render(<PricingCardSwitch />)

		expect(screen.getByText('Monthly Billing')).toBeInTheDocument()
		expect(screen.getByText('Yearly Billing')).toBeInTheDocument()
		expect(screen.getByText('25% discount')).toBeInTheDocument()
		expect(screen.getByRole('switch')).toBeInTheDocument()
	})

	it('should toggle the value when clicking on switch', async () => {
		render(<PricingCardSwitch />)

		const billingSwitch = screen.getByRole('switch')

		expect(billingSwitch.dataset.state).toBe('unchecked')

		await userEvent.click(billingSwitch)

		expect(billingSwitch.dataset.state).toBe('checked')

		await userEvent.click(billingSwitch)

		expect(billingSwitch.dataset.state).toBe('unchecked')
	})
})
