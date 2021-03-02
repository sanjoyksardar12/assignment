import { Albums, Posts, Todos, Users } from "./components/containers";

const routes = [
  {
    path: "/posts",
    component: Posts
  },
  {
    path: "/albums",
    component: Albums,
  },
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/todos",
    component: Todos,
  },
  {
    path: "/",
    component: Posts,
  }
];

export default routes;
