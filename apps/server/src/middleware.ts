import { NextResponse } from "next/server";

import { env as serverEnv } from "@/env/server";

export function middleware() {
	const res = NextResponse.next();

	res.headers.append("Access-Control-Allow-Credentials", "true");
	res.headers.append(
		"Access-Control-Allow-Origin",
		serverEnv.CORS_ORIGIN || ""
	);
	res.headers.append("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
	res.headers.append(
		"Access-Control-Allow-Headers",
		"Content-Type, Authorization"
	);

	return res;
}

export const config = {
	matcher: "/:path*",
};
