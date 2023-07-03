import { FC, useEffect } from "react";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { useActions } from "./../../Hooks/useActions";

const PostList: FC = () => {
  const { error, loading, posts } = useAppSelector((state) => state.posts);
  const { fetchPosts } = useActions();
  useEffect(() => {
    fetchPosts();
    console.log(posts);
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <div>{post.body}</div>
      ))}
    </div>
  );
};

export default PostList;
