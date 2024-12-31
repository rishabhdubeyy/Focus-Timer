import { Inter } from "next/font/google"
import "./globals.css";

const inter = Inter({ subsets: ["latin"]})

export const metadata = {
  title: "Focus Timer",
  description: "Focus Timer made by Rexer Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
