import type { Router } from 'vue-router';
import { useUserStore } from '@/stores/commons/user';

export function setupRouterGuards(router: Router) {
  router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    const isAuthenticated = userStore.isLogin;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    // Redirect to login if route requires authentication and user is not logged in
    if (requiresAuth && !isAuthenticated) {
      next({ path: '/login', query: { redirect: to.fullPath } });
      return;
    }

    // Continue to the requested route
    next();
  });

  // Optional: Add global afterEach hooks if needed
  // router.afterEach((to, from) => {
  //   // Log page views or perform other post-navigation tasks
  // });
}