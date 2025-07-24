import { createEnv } from "@t3-oss/env-nextjs";
import { minLength, nonEmpty, pipe, startsWith, string, url } from "valibot";

export const env = createEnv({
	server: {
		CORS_ORIGIN: pipe(string(), nonEmpty(), url()),
		BETTER_AUTH_SECRET: pipe(string(), nonEmpty(), minLength(16)),
		BETTER_AUTH_URL: pipe(string(), nonEmpty(), url()),
		DATABASE_URL: pipe(string(), nonEmpty()),
		RESEND_API_KEY: pipe(string(), nonEmpty(), startsWith("re_")),
	},
	experimental__runtimeEnv: process.env,
});
