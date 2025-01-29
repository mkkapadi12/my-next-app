import Link from "next/link";

const blogPosts = [
  { title: "Next.js App Router Guide", slug: "nextjs-app-router" },
  { title: "Tailwind CSS Best Practices", slug: "tailwind-best-practices" },
];

export default function BlogPage() {
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
}
