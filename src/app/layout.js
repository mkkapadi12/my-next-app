import "../styles/globals.css";

export const metadata = {
  title: "My Next.js App",
  description: "A Next.js app with Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
