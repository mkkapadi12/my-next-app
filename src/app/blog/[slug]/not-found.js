import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container mx-auto py-10 text-center">
      <h1 className="text-4xl font-bold text-red-500">404 - Post Not Found</h1>
      <p className="mt-4 text-lg">Oops! This blog post doesn't exist.</p>
      <Link href="/blog" className="text-blue-600 hover:underline mt-4 block">
        Back to Blog
      </Link>
    </main>
  );
}
