import Navbar from "@/components/navbar/Navbar";
import styles from "./homepage.module.css";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";

export default function Home({searchParams}) {

  const page = parseInt(searchParams.page) || 1;

  return(
  <div className={styles.container}>
    <Featured/>
    <CategoryList/>
    <div className={styles.content}>
      <CardList page={page}/>
      <Menu/>
    </div>
  </div>
  );
}
