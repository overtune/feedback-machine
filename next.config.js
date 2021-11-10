const nextConfig = {
	publicRuntimeConfig: {
		NEXT_PUBLIC_API_HOST:
			process.env.NEXT_PUBLIC_API_HOST,
		NEXT_PUBLIC_API_ENDPOINT:
			process.env.NEXT_PUBLIC_API_ENDPOINT,
	}
}

module.exports = nextConfig;
