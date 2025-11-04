/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
					{ key: "X-Content-Type-Options", value: "nosniff" },
					{ key: "X-Frame-Options", value: "DENY" },
					// Tighten/extend as needed; keep conservative for a portfolio
					{ key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
				],
			},
		];
	},
};

export default nextConfig;
