import { Manrope, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { ToastContainer } from "react-toastify";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata = {
  title: "HireLoop",
  description: "Developed By Shadhin and Designed By Programming Hero",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="dark"
      lang="en"
      className={`${manrope.variable} ${spaceMono.variable}dark h-full antialiased`}
    >
      <body className="max-w-360 bg-black mx-auto min-h-full flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
