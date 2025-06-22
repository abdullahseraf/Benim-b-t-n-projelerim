import Link from 'next/link';
import styles from '../About/page.module.css';
import Header from '../../../components/Header';


function About () {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Header />
                <h1 className={styles.title}>About</h1>
                <p className={styles.description}>This is the about page.</p>
                <Link href="/" className={styles.Go}> Go to Home</Link>
            </main>
        </div>
    );
}


export default About;