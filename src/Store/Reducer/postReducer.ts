import { error } from "console";

enum PostsActionType {
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
type ActionType = {
  type: IActionType | IActionTypeSucces | IActionTypeError;
};
export const postReducer = (
  state = initialState,
  action: ActionType
): IPostState => {
  switch (action.type) {
    case PostsActionType.FETCH_POSTS:
      return { loading: true, error: null, posts: [] };
    case PostsActionType.FETCH_POSTS_SUCCESS:
      return { loading: false, error: null, posts:action.};
    case PostsActionType.FETCH_POSTS_ERROR:
      return {loading:false, error, posts:[]};
    default:
      return state;
  }
};
