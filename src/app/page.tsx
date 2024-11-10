import { getPosts } from '@/lib/mongodb/actions/posts';

export default async function Home() {
  const { posts, error } = await getPosts();
  
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (posts.length === 0) {
    return <div>No posts found</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div>
          <p>ID: {post._id}</p>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  );
}