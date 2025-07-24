import { createEnv } from "@t3-oss/env-nextjs";
import { nonEmpty, pipe, string, url } from "valibot";

export const env = createEnv({
	client: {
		NEXT_PUBLIC_SERVER_URL: pipe(string(), nonEmpty(), url()),
	},
	runtimeEnv: {
		NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
	},
});
