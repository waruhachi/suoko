import { createJiti } from "jiti";

const jiti = createJiti(import.meta.url);
await jiti.import("./src/env/client");

/** @type {import('next').NextConfig} */
export default {
	experimental: {
		browserDebugInfoInTerminal: {
			showSourceLocation: true,
		},
	},
};
