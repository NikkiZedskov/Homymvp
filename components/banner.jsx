import Head from "next/head";
import { useState, useEffect } from "react";

const Banner = () => {
    let vw = null;
    const [mobile, setMobile] = useState<boolean | undefined>(undefined);
    
    useEffect(() => {
        const updateMobile = () => {
        setMobile(window.innerWidth < 720 ? true : false);
        }

        updateMobile()
        window.addEventListener('resize', updateMobile)
        return () => {
        window.removeEventListener('resize', updateMobile)
        }
    }, []);

    return (
        <>
            <div className='notification'>
                <span>{mobile ? 'Gå med i väntelistan och bli först att veta mer' : 'Homy kommer lanseras 2023, gå med väntelistan för att bli först att få veta mer och få erbjudanden'}</span>
            </div>
            <style jsx>{`
                .notification {
                padding-block: 13px;
                width: 100vw;
                background: hsl(215, 65%, 12%);
                justify-content: center;
                color: white;
                display: flex;
                align-items: center;
                font-size: 15px;
                font-family: inter, sans-serif;
                font-weight: 300;
                letter-spacing: 0.01em;
                color: hsl(215, 60%, 98%);
                text-align: center;
                padding-inline: 40px;    
                }
            `}
            </style>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet"/>
            </Head>
        </>
    );
}
 
export default Banner;