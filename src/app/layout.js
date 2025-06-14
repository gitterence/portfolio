import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Terence Ye - Software Engineer",
  description: "Software Engineer with 6+ years of experience in software development.",
  openGraph: {
    title: "Terence Ye - Software Engineer",
    description: "Software Engineer with 6+ years of experience in software development.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
