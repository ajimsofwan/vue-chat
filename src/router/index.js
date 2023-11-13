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

const requireNoAuth = (to, from, next) => {
  let user = auth.currentUser;
  if (user) {
    next({ name: "ChatRoom" });
  }
  next();
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: requireNoAuth,
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
  history: createWebHistory("/vue-chat/"),
  routes,
});

export default router;
