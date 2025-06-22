

import Link from "next/link";
import styles from "../components/styles/Header.module.css";


function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>Abdullah</h1>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
          <Link className={styles.navItem} href="/">Home</Link>
            <Link className={styles.navItem} href="/About">About</Link>
            <li className={styles.navItem}>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
