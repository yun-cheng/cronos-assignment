import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PricingCardSlider from 'components/PricingCard/PricingCardSlider'
import renderWithProviders from 'testUtils'
import { beforeAll } from 'vitest'

describe('<PricingCardSlider />', () => {
	beforeAll(() => {
		window.HTMLElement.prototype.setPointerCapture = vi.fn()
		window.HTMLElement.prototype.hasPointerCapture = vi.fn()
	})

	it('should render', async () => {
		renderWithProviders(<PricingCardSlider />)

		expect(screen.getByRole('slider')).toBeInTheDocument()
	})

	it('should increase the value when the right arrow key is pressed', async () => {
		renderWithProviders(<PricingCardSlider />)

		const slider = screen.getByRole('slider')

		expect(slider.getAttribute('aria-valuenow')).toBe('2')

		await userEvent.type(slider, '{arrowright}')

		expect(slider.getAttribute('aria-valuenow')).toBe('3')
	})

	it('should decrease the value when the left arrow key is pressed', async () => {
		renderWithProviders(<PricingCardSlider />)

		const slider = screen.getByRole('slider')

		expect(slider.getAttribute('aria-valuenow')).toBe('2')

		await userEvent.type(slider, '{arrowleft}')

		expect(slider.getAttribute('aria-valuenow')).toBe('1')
	})
})
