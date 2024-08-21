
import { Footer, Header, Navbar } from "@/components/home";
import "./globals.css";


export const metadata = {
  title: "Appscrip task mabaidul",
  description: "A comprehensive e-commerce website offering a wide range of products with seamless shopping experience, built as part of the Appscrip task by Mabaidul",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{textAlign: "center"}} >
        <Header />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
