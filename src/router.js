import mainPage from "@/pages/mainPage";
import portfolioPage from "@/pages/portfolioPage";
import authPage from "@/pages/authPage"
// import adminPage from "@/pages/adminPage"
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
  {
    path: "/admin",
    name: "admin",
    component: authPage,
  },
  // {
  //   path: "/adminpanel",
  //   name: "adminpanel",
  //   component: adminPage,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (JSON.stringify(to.query) !== "{}") {
      return { selector: to.query };
    } else {
      return { top: 0 };
    }
  }, // Задаем место открытия новой страницы
});

export default router;
