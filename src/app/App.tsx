import { Posts } from "../pages/posts";
import { useCreatePost } from "../pages/posts/api";
import { Post } from "../pages/posts/types";
import { Container } from "../widgets/container/ui/Container";

function App() {
  const [createPost, { isLoading }] = useCreatePost();

  const handleCreatePost = async () => {
    const post = prompt();
    await createPost({ title: "added", body: post } as Post);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <button onClick={handleCreatePost}>Create Post</button>
      <Posts />
    </Container>
  );
}

export default App;
