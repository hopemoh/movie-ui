import { GoogleAnalytics } from "@next/third-parties/google";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-H7E7LKZB8T" />
    </html>
  );
}
