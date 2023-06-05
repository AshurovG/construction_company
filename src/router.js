import mainPage from "@/pages/mainPage";
import portfolioPage from "@/pages/portfolioPage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: mainPage,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: portfolioPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { top: 0 };
    }
  }, // Задаем место открытия новой страницы
});

export default router;
