import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PricingCard from 'components/PricingCard/PricingCard'
import renderWithProviders from 'testUtils'
import { beforeAll } from 'vitest'

describe('<PricingCardSlider />', () => {
	beforeAll(() => {
		window.HTMLElement.prototype.setPointerCapture = vi.fn()
		window.HTMLElement.prototype.hasPointerCapture = vi.fn()
	})

	it('should render', async () => {
		renderWithProviders(<PricingCard />)

		expect(screen.getByText('100K PAGEVIEWS')).toBeInTheDocument()
		expect(screen.getByText('$16.00')).toBeInTheDocument()
		expect(await screen.findByText('or ~160 CRO')).toBeInTheDocument()
	})

	it('should apply a 25% discount on prices when the switch is on', async () => {
		renderWithProviders(<PricingCard />)

		const billingSwitch = screen.getByRole('switch')
		await userEvent.click(billingSwitch)

		expect(screen.getByText('$12.00')).toBeInTheDocument()
		expect(await screen.findByText('or ~120 CRO')).toBeInTheDocument()
	})

	it('should increase pageviews and prices when the right arrow key is pressed', async () => {
		renderWithProviders(<PricingCard />)

		const [slider] = screen.getAllByRole('slider')
		await userEvent.type(slider, '{arrowright}')

		expect(screen.getByText('500K PAGEVIEWS')).toBeInTheDocument()
		expect(screen.getByText('$24.00')).toBeInTheDocument()
		expect(await screen.findByText('or ~240 CRO')).toBeInTheDocument()
	})

	it('should decrease pageviews and apply a 25% discount on prices when the switch is on and the left arrow key is pressed', async () => {
		renderWithProviders(<PricingCard />)

		const billingSwitch = screen.getByRole('switch')
		await userEvent.click(billingSwitch)
		const [slider] = screen.getAllByRole('slider')
		await userEvent.type(slider, '{arrowleft}')

		expect(screen.getByText('50K PAGEVIEWS')).toBeInTheDocument()
		expect(screen.getByText('$9.00')).toBeInTheDocument()
		expect(await screen.findByText('or ~90 CRO')).toBeInTheDocument()
	})
})
