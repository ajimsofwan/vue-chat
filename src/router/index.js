import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ChatRoom from "../views/ChatRoom.vue";
import NotFound from "../views/NotFound.vue";
import { auth } from "../firebase/config";

// auth protection
const requireAuth = (to, from, next) => {
  let user = auth.currentUser;
  if (!user) {
    next({ name: "Home" });
  }
  next();
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/chatroom",
    name: "ChatRoom",
    component: ChatRoom,
    beforeEnter: requireAuth,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
