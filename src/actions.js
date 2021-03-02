import ActionConstants from "./action-constants";
import { API_ENDPOINT, ApiResponseTypes } from "./app-constant";

//----------------------fetching start
function fetchingRequest(name) {
  return {
    type: ActionConstants[name].FETCH.REQUEST,
    name: name
  }
}
function fetchingFailure(name) {
  return {
    type: ActionConstants[name].FETCH.FAILURE,
    name: name
  }
}
function fetchingSuccess(name, posts) {
  return {
    type: ActionConstants[name].FETCH.SUCCESS,
    data: posts,
    name: name
  }
}

function fatchingWrapper(name) {
  return function actionCreator() {
    return function (dispatch) {
      dispatch(fetchingRequest(name))
      return fetch(`${API_ENDPOINT}${name.toLowerCase()}`)
        .then((res) => res.json())
        .then(data => {
          dispatch(fetchingSuccess(name, data));
        })
        .catch(err => {
          console.log(err);
          dispatch(fetchingFailure(name));
        });
    }
  }
}
export const fetchPosts = fatchingWrapper(ApiResponseTypes.POSTS);
export const fetchAlbums = fatchingWrapper(ApiResponseTypes.ALBUMS);
export const fetchUsers = fatchingWrapper(ApiResponseTypes.USERS);
export const fetchTodos = fatchingWrapper(ApiResponseTypes.TODOS);
//============================= fetching end

// ---------------------- adding start
function addingRequest(name) {
  return {
    type: ActionConstants[name].ADD.REQUEST,
    name: name
  }
}
function addingFailure(name) {
  return {
    type: ActionConstants[name].ADD.FAILURE,
    name: name
  }
}
function addingSuccess(name, posts) {
  return {
    type: ActionConstants[name].ADD.SUCCESS,
    data: posts,
    name: name
  }
}

function addWrapper(name) {
  return function actionCreator(formData) {
    return function (dispatch) {
      dispatch(addingRequest(name))
      return fetch(`${API_ENDPOINT}${name.toLowerCase()}`, { method: "POST", body: JSON.stringify(formData) })
        .then((res) => res.json())
        .then(data => {
          dispatch(addingSuccess(name, { ...formData, ...data }));
        })
        .catch(err => {
          console.log(err);
          dispatch(addingFailure(name));
        });
    }
  }
}

export const addPosts = addWrapper(ApiResponseTypes.POSTS);

//=============================== adding end
