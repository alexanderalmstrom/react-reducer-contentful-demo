import { useReducer } from "react";
import { getPosts } from "./lib/contentful";
import { postReducer } from "./reducers/post";
import Post from "./components/Post";

function App() {
  const [{ posts }, dispatch] = useReducer(postReducer, { posts: [] });

  return (
    <div>
      <button
        onClick={async () => {
          dispatch({ type: "GET_POSTS", payload: await getPosts() });
        }}
      >
        Get posts
      </button>
      {posts.map(({ fields }, idx) => (
        <Post key={idx} {...fields} />
      ))}
    </div>
  );
}

export default App;
