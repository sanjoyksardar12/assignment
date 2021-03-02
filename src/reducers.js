import  ActionConstants  from "./action-constants.js";
import { combineReducers } from "redux";
import { ApiResponseTypes } from "./app-constant.js";


//reusable reducer is used
function createResponsesTypesNamedReducers(responseName, considerAddingCase = false) {
  return function common(state = {
    fetching: false,
    data: [],
    adding: false
  }, action) {
    if(action.name !==responseName){
      return state;
    }
    switch (action.type) {

      case ActionConstants[responseName].FETCH.REQUEST:
        return { ...state, fetching: true };
      case ActionConstants[responseName].FETCH.FAILURE:
        return { ...state, fetching: false };
      case ActionConstants[responseName].FETCH.SUCCESS: {
        return { ...state, fetching: false, data: action.data };
      }

      case considerAddingCase && ActionConstants[responseName].ADD.REQUEST:
        return { ...state, adding: true };
      case considerAddingCase && ActionConstants[responseName].ADD.FAILURE:
        return { ...state, adding: false };
      case considerAddingCase && ActionConstants[responseName].ADD.SUCCESS: {
        return { ...state, adding: false, data: [action.data, ...state.data, ] };
      }
      default:
        return state;
    }
  }
}



export default combineReducers({
  posts: createResponsesTypesNamedReducers(ApiResponseTypes.POSTS, true),
  albums: createResponsesTypesNamedReducers(ApiResponseTypes.ALBUMS),
  users: createResponsesTypesNamedReducers(ApiResponseTypes.USERS),
  todos: createResponsesTypesNamedReducers(ApiResponseTypes.TODOS),
});
