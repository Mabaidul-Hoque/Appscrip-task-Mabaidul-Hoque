
import { Products } from "@/components/home";
import styles from "./page.module.css";
import ProductsDataProvider from "@/contexts/ProductsDataProvider";
import { Divider } from "@/components/ui";

export default function Home() {
  return (
    <ProductsDataProvider>
    <main className={styles.main}>
      <Divider />
      <Products />
    </main>
    </ProductsDataProvider>
  );
}
