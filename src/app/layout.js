import "../styles/globals.css";

export const metadata = {
  title: "My Next.js App",
  description: "A Next.js app with Tailwind CSS",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  );
}
