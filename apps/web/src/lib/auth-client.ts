import { createAuthClient } from "better-auth/react";

import { env as clientEnv } from "@/env/client";

export const authClient = createAuthClient({
	baseURL: clientEnv.NEXT_PUBLIC_SERVER_URL,
});
