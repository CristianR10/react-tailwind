import { useEffect, useState } from "react";
import { PostForm } from "./components/PostForm";
import { PostItem } from "./components/PostItem";
import { Post } from "./types/Post";
import { api } from "./Api";

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [load, setLoading] = useState(false);

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    setLoading(true);
    let json = await api.getAllPosts();
    setPosts(json);
    setLoading(false);
  };

  const handleAddPost = async (title: string, body: string) => {
    let json = await api.addNewPost(title, body, 1);

    if (json.id) {
      alert("Post adicionado com sucesso!");
    } else {
      alert("Ocorreu algum erro");
    }
  };

  return (
    <div className="p-5">
      {load && <div>Carregando</div>}

      <PostForm onAdd={handleAddPost} />

      {!load && posts.length > 0 && (
        <>
          <p>Total de Post: {posts.length}</p>
          <div>
            {posts.map((item, index) => (
              <PostItem data={item} />
            ))}
          </div>
        </>
      )}

      {!load && posts.length === 0 && <div>Não Há post</div>}
    </div>
  );
};

export default App;

// https://pokeapi.co/api/v2/pokemon/
