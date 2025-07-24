import { defineConfig } from "drizzle-kit";

import { env as serverEnv } from "@/env/server";

export default defineConfig({
	schema: "./src/db/schema",
	out: "./src/db/migrations",
	dialect: "turso",
	dbCredentials: {
		url: serverEnv.DATABASE_URL,
	},
});
