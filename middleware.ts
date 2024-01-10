import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: [
    "/",
    "/cart",
    "/products",
    "/about",
    "/careers",
    "/category/:slug",
    "/category/:slug/:productSlug",
    "/api/catalogue",
    "/api/category",
    "/api/category/:id",
    "/api/webhook/clerk",
    "/api/webhook/stripe",
  ],
  ignoredRoutes: [
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "/api/catalogue",
    "/api/checkout_sessions",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
