import { FC } from "react";
import { usePostsList, useCreatePost } from "../api";

type PostsProps = {
  className?: string;
};

export const Posts: FC<PostsProps> = () => {
  const { isLoading, data: post } = usePostsList(1);
  const [createPost, { isLoading: isUpdating }] = useCreatePost();

  const { title, body } = post ?? {};

  if (isLoading || isUpdating) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
      <button
        onClick={() => createPost({ title: "Test", body: "test", userId: 1 })}
      >
        Create Post
      </button>
    </>
  );
};
