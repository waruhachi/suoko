import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		browserDebugInfoInTerminal: {
			showSourceLocation: true,
		},
	},
};

export default nextConfig;
