import Link from "next/link";

const blogPosts = [
  { title: "Next.js App Router Guide", slug: "nextjs-app-router" },
  { title: "Tailwind CSS Best Practices", slug: "tailwind-best-practices" },
  {
    title: "React Performance Optimization",
    slug: "react-performance-optimization",
  },
  { title: "Understanding JavaScript Closures", slug: "javascript-closures" },
  { title: "CSS Grid Layout Tutorial", slug: "css-grid-layout" },
  { title: "TypeScript for Beginners", slug: "typescript-for-beginners" },
];

const Blog = () => {
  return (
    <main className="container mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-xl text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blog;
