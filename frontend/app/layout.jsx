import "./globals.css";
import CyberpunkExperience from "./components/CyberpunkExperience";

export const metadata = {
  title: "BIMA//NEON",
  description: "Cyberpunk portfolio built with Next.js and Python",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CyberpunkExperience />
        {children}
      </body>
    </html>
  );
}
