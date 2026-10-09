import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

function fetchPosts(): Promise<Post[]> {
  return axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.data;
    });
}

fetchPosts()
  .then((posts) => {
    console.log("First post title:", posts[0]?.title);
    console.log("All posts:", posts);
  })
  .catch((error: unknown) => {
    console.error("Failed to fetch posts:", error);
  });
