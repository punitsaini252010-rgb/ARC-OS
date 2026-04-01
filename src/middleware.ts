import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Public routes are the only ones people can see without logging in
  publicRoutes: ["/", "/api/webhooks(.*)"], 
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

