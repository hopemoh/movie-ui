import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Review",
  description: "Movie Review/Rating App",
  keywords: "movie, review, rating, app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4643996002315789"
          crossOrigin="anonymous"
        ></script>
        <meta
          name="google-site-verification"
          content="7tzFuUfurJatFCS_hHRomqJeXE40gBqyWGggwCvNcus"
        />
      </head>
      <meta
        name="google-site-verification"
        content="7tzFuUfurJatFCS_hHRomqJeXE40gBqyWGggwCvNcus"
      />
      <body className={inter.className}>
        <Navbar />
        <ToastContainer />
        <div className="mx-auto ">{children}</div>
      </body>
    </html>
  );
}
