import Image from "next/image";
import getPosts from "@/server/actions/get-posts";
import createPosts from "@/server/actions/create-post";
import PostButton from "./component/post-button";

export default async function Home() {
  const { error, success } = await getPosts();
  if (error) {
    throw new Error(error);
  }

  if (success) {
    console.log(success);
  }

  return (
    <main>
      <h1>Posts</h1>
      <ol style={{ listStyleType: "decimal" }}>
        {success && success.length > 0 ? (
          success.map((post) => (
            <li key={post.id}>
              {post.title} - {post.body}
            </li>
          ))
        ) : (
          <li>No posts</li>
        )}
      </ol>
      <form action={createPosts}>
        <input
          className="bg-black border-white border pl-1  mx-1"
          type="text"
          name="title"
          placeholder="Title"
        />
        <input
          className="bg-black border-white border pl-1 mx-1"
          type="text"
          name="body"
          placeholder="Body"
        />
        <PostButton />
      </form>
    </main>
  );
}
