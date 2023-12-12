import { $api } from "../../../shared/api";
import { Post } from "../types";

const postsApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getPostsList: build.query<Post, number>({
      query: (id) => ({ url: `/posts/${id}` }),
    }),
    createPost: build.mutation<Post, Post>({
      query: (body: Post) => ({
        url: "/posts",
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const usePostsList = postsApi.useGetPostsListQuery;
export const useCreatePost = postsApi.useCreatePostMutation;
