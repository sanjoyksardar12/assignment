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


// const routes = () => {
//   return (
//     <>
//       <Route exact path="/" component={Posts} />
//       <Route path="/posts" component={Posts} />
//       <Route path="/albums" component={Albums} />
//       <Route path="/users" component={Users} />
//       <Route path="/todos" component={Todos} />
//     </>
//   )