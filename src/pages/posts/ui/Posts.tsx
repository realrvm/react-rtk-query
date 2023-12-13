import { FC, MouseEventHandler, memo } from "react";
import { useDeletePost, usePostsList, useUpdatePost } from "../api";

import styles from "./styles.module.scss";
import { Post } from "../types";

type PostsProps = {
  className?: string;
};

const MapPosts: FC<Post> = memo(({ title, id, body }) => {
  const [deletePost, {}] = useDeletePost();
  const [updatePost, {}] = useUpdatePost();

  const delItem: MouseEventHandler = (e) => {
    e.preventDefault();
    deletePost({ title, id, body });
  };

  const updateItem: MouseEventHandler = (e) => {
    e.preventDefault();
    const title = prompt() ?? "";
    updatePost({ ...{ title, id, body }, title });
  };

  return (
    <div className={styles.post}>
      <div className={styles.post_item} onClick={updateItem}>
        <div>{id}</div>
        <div>{title}</div>
        <div>{body}</div>
      </div>
      <button className={styles.btn} onClick={delItem}>
        Delete
      </button>
    </div>
  );
});

export const Posts: FC<PostsProps> = () => {
  const { isLoading, data: posts } = usePostsList(1);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.posts}>
      {posts &&
        posts.map((post) => {
          const { id } = post;
          return <MapPosts key={id} {...post} />;
        })}
    </div>
  );
};
