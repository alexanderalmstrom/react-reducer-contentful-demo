import { useEffect, useReducer } from "react";
import { getPosts } from "./lib/contentful";
import { postReducer } from "./reducers/post";
import Post from "./components/Post";

function App() {
  const [{ posts }, dispatch] = useReducer(postReducer, { posts: [] });

  const loadPosts = async () => {
    const payload = await getPosts();

    dispatch({ type: "GET_POSTS", payload });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      {posts.map(({ fields }, idx) => (
        <Post key={idx} {...fields} />
      ))}
    </div>
  );
}

export default App;
