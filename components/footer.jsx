import Link from "next/link";
import styles from '../styles/footer.module.css';
import Image from "next/image";
import { AiOutlineInstagram } from 'react-icons/Ai'

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.flex_container}>
                        <div className={styles.logo}>
                            <Link href='/'>
                                <Image src='/Homy logo white.svg' alt='Homy logo' width={140} height={31} />
                            </Link>
                        </div>
                        <div className={styles.flex_container}>
                            <nav>
                                <ul>
                                    <Link className={styles.nav_blog} href='/Resources/blog'><li>Blogg</li></Link>
                                    <li>info@Homy.digital</li>
                                    <li>press@Homy.digital</li>
                                    <li><Link target='_blank' href='https://www.instagram.com/homydigital/'><AiOutlineInstagram /></Link></li>
                                </ul>
                            </nav>
                            <div className={styles.social}>
                                <ul>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
 
export default Footer;