import { setup } from "axios-cache-adapter";

const api = setup({
	baseURL: "https://api.github.com",

	cache: {
		exclude: {
			maxAge: 60 * 60 * 1000,
			// Only exclude PUT, PATCH and DELETE methods from cache
			methods: ["put", "patch", "delete", "post"],
		},
	},
});
export default api;
