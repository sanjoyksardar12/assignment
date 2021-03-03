import DataCardHOC from "./card";
import { ApiResponseTypes } from "../app-constant";


export const Posts = DataCardHOC({
  enableAddTodo: true,
  name: ApiResponseTypes.POSTS,
  //in view first element will be title, and second element will be body
  view: [{
    props: "title",
  }, {
    props: "body",
  }]
});

export const Albums = DataCardHOC({
  name: ApiResponseTypes.ALBUMS,
  view: [{
    props: "title",
  }]
});

export const Users = DataCardHOC({
  name: ApiResponseTypes.USERS,
  view: [{
    props: "name",
  }, {
    props: ["email", { address: ["street", "suite", "city", "zipcode"] }],
  }]
});

export const Todos = DataCardHOC({
  name: ApiResponseTypes.TODOS,
  view: [{
    props: "title",
  }]
});