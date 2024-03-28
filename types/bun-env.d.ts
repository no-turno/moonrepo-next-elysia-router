declare module "bun" {
	interface Env {
		APP_PORT: string;
		APP_HOSTNAME: `${"0.0.0.0" | "127.0.0.1" | "localhost"}`;
		SSL: "0" | "1";
		APP_MODE: `${"development" | "headless"}`;
	}
}
