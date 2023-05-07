import style from '../styles/header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Turn as Hamburger } from 'hamburger-react'
import { AiOutlineInstagram } from 'react-icons/Ai'

const Header = (props) => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);

        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflowY = 'hidden';
        }
    }

    const closeSidebar = () => {
        setSidebar(!sidebar);

        document.body.style.overflowY = 'unset';
    }

    const [social, setSocial] = useState(false);
    const changeSocial = () => {
        if(window.scrollY >= 40) {
            setSocial(true);
        } else {
            setSocial(false);
        }
    }

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', changeSocial);
    }

    const [transparency, setTransparency] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const containsResources = router.pathname.includes('Resources');
        if (containsResources && sidebar) {
          setTransparency(true);
        } else {
          setTransparency(false);
        }
    }, [router.pathname, sidebar]);

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <header className={`${transparency ? 'not_transparent': ''} ${props.props}`}>
                <div className={`container ${style['nav-container']}`}>
                    <div>
                        <Link href='/' onClick={!sidebar ? undefined : closeSidebar}>
                            <Image src='/Homy logo blue.svg' alt='Homy logo' width={140} height={31} />
                        </Link>
                    </div>
                    <nav className={`${style.nav} ${sidebar ? style.responsive : style.closed}`}>
                        <ul onClick={sidebar ? (!sidebar ? showSidebar : closeSidebar) : undefined} className={style.navigation}>
                            <li><Link href='/Resources/blog'>Blogg</Link></li>
                            <li><Link href='/jobs'>Jobb</Link></li>
                        </ul>
                        <div>
                            <Link href='/waitlist'>
                                <button onClick={sidebar ? (!sidebar ? showSidebar : closeSidebar) : undefined} className={style['waitlist-button']}>Gå med väntelistan</button>
                            </Link>
                        </div>
                        <ul onClick={sidebar ? (!sidebar ? showSidebar : closeSidebar) : undefined} className={social ? style.social2 : style.social1}>
                            <li><Link target='_blank' href='https://www.instagram.com/homydigital/'><AiOutlineInstagram /></Link></li>
                        </ul>
                    </nav>
                    <div onClick={!sidebar ? showSidebar : closeSidebar} className={style.toggle}>
                        <Hamburger distance="lg" duration={0.5} rounded color="#0F223D" size={26} toggled={sidebar} toggle={setSidebar}/>
                    </div>
                </div>
            </header>
        </>
    );
}
 
export default Header;