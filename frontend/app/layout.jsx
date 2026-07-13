import "./globals.css";

export const metadata = {
  title: "BIMA//NEON",
  description: "Cyberpunk portfolio built with Next.js and Python",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}