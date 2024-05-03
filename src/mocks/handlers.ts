import { http, HttpResponse, type HttpHandler } from 'msw'

const handlers: HttpHandler[] = [
	http.get('https://api.coingecko.com/api/v3/simple/price', () =>
		HttpResponse.json({ 'crypto-com-chain': { usd: 0.1 } })
	)
]

export default handlers
