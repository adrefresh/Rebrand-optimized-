
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import LetsTalk from "./components/AboutpageComps/letstalk";

export const metadata: Metadata = {
  title: "AdRefresh - Performance Marketing",
  description: "AI-Enhanced AdOps and Digital Performance Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <html
      lang="en"
      style={{
        ["--base-path" as any]: basePath,
      }}
    >
      <body className="layout-root">
    <Header/>
        {children}
        {/* <LetsTalk/> */}
      <Footer/>
      </body>
    </html>
  );
}
