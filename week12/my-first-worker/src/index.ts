/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		// return new Response("Hello World!");
		// returning json file
		// return Response.json({
		// 	message: "Hello Wrangler"
		// })
		console.log(request.body)
		console.log(request.headers)
		console.log(request.method)
		console.log(request.url)

		if(request.method === "/GET"){
			return Response.json({
				message: "You have sent a GET request"
			});
		} else {
			return Response.json({
				message: "You did not sent a GET request",
				method: request.method
			});
		}
	},
} satisfies ExportedHandler<Env>;
