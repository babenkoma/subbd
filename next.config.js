/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	headers: async () =>
		Promise.resolve([
			{
				source: '/(favicons|static)/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000',
					},
				],
			},
			{
				source: '/favicon.ico',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000',
					},
				],
			},
		]),
};

export default nextConfig;
