import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { env as serverEnv } from "@/env/server";

import { db } from "../db";
// biome-ignore lint/performance/noNamespaceImport: <database schema>
import * as schema from "../db/schema/auth";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "sqlite",

		schema,
	}),
	trustedOrigins: [serverEnv.CORS_ORIGIN || ""],
	emailAndPassword: {
		enabled: true,
	},
	secret: serverEnv.BETTER_AUTH_SECRET,
	baseURL: serverEnv.BETTER_AUTH_URL,
});
