import Link from "next/link";
import styles from '../styles/resHeader.module.css';
import { useState, useEffect } from "react";

const ResourceHeader = () => {

    const [color, setColor] = useState(false);
  
    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 125) {
                setColor(true);
            } else {
                setColor(false);
            }
        }
        window.addEventListener('scroll', changeColor);
        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    return (
        <>
            <header className={`${styles.header} ${color ? styles.not_transparent : styles.transparent}`}>
                <div className={'container'}>
                    <div className={`${color ? styles.resourceHeader2 : styles.resourceHeader1}`}>
                        <nav className=''>
                            <div>
                                <span className=''>
                                    <Link href='/Resources/blog'>Blogg</Link>
                                </span>
                            </div>
                            <ul className=''>
                                <li><Link href=''></Link></li>
                                <li><Link href=''></Link></li>
                            </ul>
                        </nav>
                        <div>
                            <button className=''></button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
 
export default ResourceHeader;