import { Dispatch } from "redux";
import {
  ActionType,
  FETCH_POSTS_SUCCESS,
  PostsActionType,
} from "../Reducer/postReducer";
import axios from "axios";

export const fetchPosts = () => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch({ type: PostsActionType.FETCH_POSTS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({
        type: PostsActionType.FETCH_POSTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: PostsActionType.FETCH_POSTS_ERROR,
        payload: "Произошла ошибка при загрузки пользователей",
      });
    }
  };
};
