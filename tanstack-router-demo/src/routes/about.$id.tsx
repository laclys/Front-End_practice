import { createFileRoute } from "@tanstack/react-router";
import { fetchPost } from "../api/posts";

export const Route = createFileRoute("/about/$id")({
  // Pass the fetchPosts function to the route context
  beforeLoad: () => ({
    fetchPosts: () => console.info("foo"),
  }),
  loader: async ({ params: { id } }) => fetchPost(id),
  // Consider the route's data fresh for 10 seconds
  staleTime: 10_000,
  component: about,
  notFoundComponent: () => {
    return <p>Post not found</p>;
  },
  pendingComponent: () => {
    return <p>Loading...</p>;
  },
});

function about() {
  // In a component!
  const post = Route.useLoaderData();
  const { id } = Route.useParams();
  return (
    <div>
      Post ID: {id}
      <div className="space-y-2">
        <h4 className="text-xl font-bold underline">{post.title}</h4>
        <div className="text-sm">{post.body}</div>
      </div>
    </div>
  );
}
