
import { Footer, Header, Navbar } from "@/components/home";
import "./globals.css";
import "../components/home/navbar/navbar.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalDataProvider from "@/contexts/GlobalDataProvider";


export const metadata = {
  title: "Appscrip task mabaidul",
  description: "A comprehensive e-commerce website offering a wide range of products with seamless shopping experience, built as part of the Appscrip task by Mabaidul",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{textAlign: "center"}} >
        <GlobalDataProvider>
          <Header />
          <Navbar navListStyle={"nav_list"} 
          navItemStyle="nav_item_desk"
          activeLink="active_desk"
           />
          <main>{children}</main>
          <Footer />

          <ToastContainer />
        </GlobalDataProvider>
      </body>
    </html>
  );
}
