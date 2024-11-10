import { Post } from "../models/post";
import clientPromise from "../mongo";

export async function getPosts() {
  try {
    await clientPromise;
    const posts = await Post.find();
    return { posts };
  } catch (error) {
    return { error: "Failed to fetch posts" + error };
  }
}

export async function createPost(postData: {
  title: string;
  text: string;
}) {
  try {
    const post = await Post.create(postData);
    return { post };
  } catch (error) {
    return { error: "Failed to create user" };
  }
}
