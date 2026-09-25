import { useAuth } from "@/stores/auth.js";
import { PORTFOLIO_DEMO } from "@/config/demo.js";

export default async function routes(to, from, next) {
  
  if (to.meta?.auth) {

    if (PORTFOLIO_DEMO) {
      next();
      return;
    }

    const auth = useAuth();

    if (auth.token && auth.user) {

      const isAuthenticated = await auth.checkToken();

      if (isAuthenticated) next();
      else next({ name: "login" });

    } else {

      next({ name: "login" });
    }

  } else {

    next();
  }
}
