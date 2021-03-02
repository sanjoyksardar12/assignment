const ActionConstants = {
  POSTS: {
    FETCH: {
      REQUEST: "Posts.Fetch.Request",
      FAILURE: "Posts.Fetch.Failure",
      SUCCESS: "Posts.Fetch.Success"
    },
    ADD: {
      REQUEST: "Posts.Add.Request",
      FAILURE: "Posts.Add.Failure",
      SUCCESS: "Posts.Add.Success"
    }
  },
  ALBUMS: {
    FETCH: {
      REQUEST: "Albums.Fetch.Request",
      FAILURE: "Albums.Fetch.Failure",
      SUCCESS: "Albums.Fetch.Success"
    }
  },
  USERS: {
    FETCH: {
      REQUEST: "Users.Fetch.Request",
      FAILURE: "Users.Fetch.Failure",
      SUCCESS: "Users.Fetch.Success"
    }
  },
  TODOS: {
    FETCH: {
      REQUEST: "Todos.Fetch.Request",
      FAILURE: "Todos.Fetch.Failure",
      SUCCESS: "Todos.Fetch.Success"
    }
  }
}

export default ActionConstants;