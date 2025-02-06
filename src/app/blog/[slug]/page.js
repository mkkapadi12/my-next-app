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
  "react-performance-optimization": {
    title: "React Performance Optimization",
    content:
      "Tips and tricks to optimize the performance of your React applications.",
  },
  "javascript-closures": {
    title: "Understanding JavaScript Closures",
    content:
      "A deep dive into JavaScript closures and how to use them effectively.",
  },
  "css-grid-layout": {
    title: "CSS Grid Layout Tutorial",
    content: "Learn how to create complex layouts easily with CSS Grid.",
  },
  "typescript-for-beginners": {
    title: "TypeScript for Beginners",
    content:
      "An introduction to TypeScript for developers new to the language.",
  },
};

const BlogPost = ({ params }) => {
  const post = blogPosts[params.slug];
  console.log(post);

  if (!post) {
    return <NotFound />;
  }

  return (
    <main className="container mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="mt-4 text-lg">{post.content}</p>
    </main>
  );
};

export default BlogPost;
