const { VITE_COINGECKO_API_KEY } = import.meta.env

type ResponseData = {
	'crypto-com-chain': {
		usd: number
	}
}

export default async function fetchCroPrice() {
	const response = await fetch(
		`https://api.coingecko.com/api/v3/simple/price?ids=crypto-com-chain&vs_currencies=usd&x_cg_demo_api_key=${VITE_COINGECKO_API_KEY}`
	)
	const data = (await response.json()) as ResponseData

	return data['crypto-com-chain'].usd
}
