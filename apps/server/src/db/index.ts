import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import { env as serverEnv } from "@/env/server";

const client = createClient({
	url: serverEnv.DATABASE_URL,
});

export const db = drizzle({ client });
