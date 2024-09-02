// // export { auth as middleware } from "@acme/auth";
import { auth } from "@acme/auth";
import { NextRequest } from 'next/server';


const middleware = (request: NextRequest) => {
	// console.log(request) //  { session: { user: { ... } }
	console.log('pathname', request.nextUrl.pathname)
}

const withAuthMiddleware = auth(middleware)
export default withAuthMiddleware
// export default withLocales(withAuthMiddleware)

// Run this middleware for all routes except api, static, image, and favicon
export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
