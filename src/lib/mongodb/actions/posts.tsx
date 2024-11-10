import { Post } from "../models/post";
import connectToDB from "../mongo";

export async function getPosts() {
  try {
    // Zkontroluj připojení k databázi
    const client = await connectToDB();

    // Pokud je připojení aktivní, provedeme dotaz
    const posts = await Post.find({});
    return { posts };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { error: "Failed to fetch posts" };
  }
}

export async function createPost(postData: { title: string; text: string }) {
  try {
    const post = await Post.create(postData);
    return { post };
  } catch (error) {
    return { error: "Failed to create user" };
  }
}
