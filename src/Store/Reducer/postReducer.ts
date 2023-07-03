import { createSlice } from "@reduxjs/toolkit";

export enum PostsActionType {
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
}

const initialState = {
  posts: [],
  loading: false,
  error: null,
};
interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface IPostState {
  posts: IPost[];
  loading: boolean;
  error: null | string;
}
interface IActionType {
  type: PostsActionType.FETCH_POSTS;
}
interface IActionTypeSucces {
  type: PostsActionType.FETCH_POSTS_SUCCESS;
  payload: IPost[];
}
interface IActionTypeError {
  type: PostsActionType.FETCH_POSTS_ERROR;
  payload: string;
}
export type ActionType = IActionType | IActionTypeSucces | IActionTypeError;

export const postReducer = createSlice({
  name: "postReducer",
  initialState: initialState as IPostState,
  reducers: {
    FETCH_POSTS: (state) => {
      state.loading = true;
      state.error = null;
      state.posts = [];
    },
    FETCH_POSTS_SUCCESS: (state, action) => {
      state.loading = false;
      state.error = null;
      state.posts = action.payload;
    },
    FETCH_POSTS_ERROR: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.posts = [];
    },
  },
});

export const { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } =
  postReducer.actions;

export default postReducer.reducer;
