import { FC, useEffect } from "react";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { useActions } from "./../../Hooks/useActions";
import e from "express";
import { FETCH_POSTS_SUCCESS } from "../../Store/Reducer/postReducer";

const PostList: FC = () => {
  const { error, loading, posts } = useAppSelector((state) => state.posts);
  const { fetchPosts } = useActions();

  useEffect(() => {
    fetchPosts();
    console.log(posts);
  }, []);
  if (loading) {
    <div>Loading</div>;
  }
  if (error) {
    <h1>{"Произошла ошибка"}</h1>;
  }
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.body}</div>
      ))}
    </div>
  );
};

export default PostList;
