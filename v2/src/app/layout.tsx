import Navbar from "@/Components/Navbar/Navbar";
import "./globals.css";
import { sansText } from "@/assets/fonts";
import Footer from "@/Components/Footer/Footer";
import Frame from "@/Components/Frame/Frame";

export const metadata = {
  title: "PEAK SHIFT LTD.",
  description: "WE CRAFT DIGITAL PRODUCTS BUILT ON WEB, MOBILE & BITCOIN.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sansText.className}>
        <Navbar />
        <Frame />
        {children}
        <Footer />
      </body>
    </html>
  );
}
