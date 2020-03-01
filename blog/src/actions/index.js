import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

/*
// this is applied with middleware Redux-Thunk, so you assume to get dispatch and getState functions in the function you return.
export const fetchPost = () => {
  // inner function
  // btw just so you know you get getState function. Here we actually do need it
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/post");
    dispatch({ type: "FETCH_POSTS", paylod: response.data }); //then dispatch the action object
  };
};
*/

// this is the shortened version of above!
export const fetchPost = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POST", payload: response.data });
};

// user creator for fetch single user
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// use lodash.memoize
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});

// something like this is fine to have an action with thunk to return just plain action object
// export const selectPost = () => {
//   return {
//     type: "SELECT_POST"
//   };
// };
