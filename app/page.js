
import { Products } from "@/components/home";
import styles from "./page.module.css";
import ProductsDataProvider from "@/contexts/ProductsDataProvider";

export default function Home() {
  return (
    <ProductsDataProvider>
    <main className={styles.main}>
      
      <Products />
    </main>
    </ProductsDataProvider>
  );
}
