import { $api } from "../../../shared/api";
import { Post } from "../types";

const postsApi = $api
  .enhanceEndpoints({ addTagTypes: ["Post"] })
  .injectEndpoints({
    endpoints: (build) => ({
      getPostsList: build.query<Post[], number>({
        query: () => ({ url: `/posts/` }),
        providesTags: ["Post"],
      }),
      createPost: build.mutation<Post, Post>({
        query: (body: Post) => ({
          url: "/posts",
          method: "POST",
          body,
        }),
        invalidatesTags: ["Post"],
      }),
      updatePost: build.mutation<Post, Post>({
        query: (body: Post) => ({
          url: `/posts/${body.id}`,
          method: "PUT",
          body,
        }),
        invalidatesTags: ["Post"],
      }),
      deletePost: build.mutation<Post, Post>({
        query: (body) => ({
          url: `/posts/${body.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Post"],
      }),
    }),
    overrideExisting: false,
  });

export const usePostsList = postsApi.useGetPostsListQuery;
export const useCreatePost = postsApi.useCreatePostMutation;
export const useUpdatePost = postsApi.useUpdatePostMutation;
export const useDeletePost = postsApi.useDeletePostMutation;
