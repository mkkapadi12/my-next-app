import Image from "next/image";
import Link from "next/link";
import error from "../../../images/not-found.svg";

const NotFound = () => {
  return (
    <main className="container mx-auto py-10 text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-4xl font-bold mb-6">Post Not Found</h2>
      <p className="mt-4 text-lg mb-6">
        Oops! The blog post you're looking for doesn't exist. It might have been
        removed or the URL might be incorrect.
      </p>
      <Image src={error} alt="Not Found" className="mx-auto mb-6" />
      <Link href="/blog" className="text-blue-600 hover:underline text-xl">
        Back to Blog
      </Link>
    </main>
  );
};

export default NotFound;
