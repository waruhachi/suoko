"use client";

import { AuthUIProvider } from "@daveyplate/better-auth-ui";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";
import { queryClient } from "@/utils/trpc";

import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
	const router = useRouter();

	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			disableTransitionOnChange
			enableSystem
		>
			<AuthUIProvider
				authClient={authClient}
				avatar={{
					upload: async (file) => {
						const formData = new FormData();
						formData.append("avatar", file);
						const res = await fetch("/api/uploadAvatar", {
							method: "POST",
							body: formData,
						});
						const { data } = await res.json();
						return data.url;
					},
				}}
				Link={Link}
				magicLink
				multiSession
				navigate={router.push}
				onSessionChange={() => {
					router.refresh();
				}}
				passkey
				replace={router.replace}
				settings={{
					url: "/dashboard/settings",
				}}
				social={{
					providers: ["github", "google", "facebook", "apple"],
				}}
				twoFactor={["otp", "totp"]}
				viewPaths={{
					SIGN_IN: "login",
					SIGN_OUT: "logout",
					SIGN_UP: "register",
					FORGOT_PASSWORD: "forgot",
					RESET_PASSWORD: "reset",
					MAGIC_LINK: "magic",
					SETTINGS: "config",
				}}
			>
				<QueryClientProvider client={queryClient}>
					{children}
					<ReactQueryDevtools />
				</QueryClientProvider>
				<Toaster richColors />
			</AuthUIProvider>
		</ThemeProvider>
	);
}
