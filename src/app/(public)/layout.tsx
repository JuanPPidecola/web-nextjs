import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <header><Navbar/></header>
        <main>{children}</main>
        <footer><Footer/></footer>
    </>
  );
}
