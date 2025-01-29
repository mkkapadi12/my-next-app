import NotFound from "./not-found";

const blogPosts = {
  "nextjs-app-router": {
    title: "Next.js App Router Guide",
    content: "Learn how to use Next.js App Router with server components.",
  },
  "tailwind-best-practices": {
    title: "Tailwind CSS Best Practices",
    content: "Optimize your Tailwind CSS workflow with these best practices.",
  },
};

export default function BlogPost({ params }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return <NotFound />;
  }

  return (
    <main className="container mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="mt-4 text-lg">{post.content}</p>
    </main>
  );
}
