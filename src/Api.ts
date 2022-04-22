import axios from "axios";
const url = `https://jsonplaceholder.typicode.com`;

export const api = {
  getAllPosts: async () => {
    // Com a Biblioteca Axios
    let response = await axios.get(`${url}/posts`);
    return response.data;

    // ============================================//

    // Forma padrão de fazer uma requisição
    // let response = await fetch(`${url}/posts`);
    // let json = await response.json();
    // return json;
  },
  addNewPost: async (title: string, body: string, userId: number) => {
    // Com a Biblioteca Axios
    let response = await axios.post(`${url}/posts`, {
      title,
      body,
      userId,
    });

    // ============================================//

    // Forma padrão de fazer uma requisição POST
    // let response = await fetch(`${url}/posts`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     title,
    //     body,
    //     userId,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // let json = await response.json();
    // return json;
  },
};
