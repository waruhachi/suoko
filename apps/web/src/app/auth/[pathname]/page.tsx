import { AuthCard } from "@daveyplate/better-auth-ui";
import { authViewPaths } from "@daveyplate/better-auth-ui/server";

export function generateStaticParams() {
	return Object.values({
		...authViewPaths,
		SIGN_IN: "login",
		SIGN_OUT: "logout",
		SIGN_UP: "register",
		FORGOT_PASSWORD: "forgot",
		RESET_PASSWORD: "reset",
		MAGIC_LINK: "magic",
		SETTINGS: "config",
	}).map((pathname) => ({ pathname }));
}

export default async function AuthPage({
	params,
}: {
	params: Promise<{ pathname: string }>;
}) {
	const { pathname } = await params;

	return (
		<div className="flex size-full grow flex-col items-center justify-center gap-3">
			<AuthCard pathname={pathname} />
		</div>
	);
}
