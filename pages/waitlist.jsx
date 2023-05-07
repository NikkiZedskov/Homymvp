import Form from '../components/form';
import styles from '../styles/waitlist.module.css';       
import { totalDocuments } from './api/members';
import Head from 'next/head';
import { useState } from 'react';
import Modal from '../components/waitlistModal'

const Waitlist = ({ formattedTotal }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Head>
                <link rel="stylesheet" href="/font.css" />
                <title>Väntelista - Homy | Gå med {formattedTotal} andra</title>
            </Head>
            <section>
                <div className={styles.top_section}>
                    <div className="container">
                        <div className={styles.top_div}>
                            <div>
                                <div className={`boujee-text ${styles.members}`}>{formattedTotal}</div>
                                <span>Personer framför dig</span>
                            </div>
                            <h1>Följ med på resan</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom_section}>
                    <div className="container">
                        <div className={styles.flex_container}>
                            <div className={styles.flex1}>
                                <h3>Få tidig tillgång</h3>
                                <p>Gå med i kön för att få erbjudanden <br /> och tidig tillgång när Homy lanseras</p>
                            </div>
                            <div className={styles.flex2}>
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
                <Modal open={showModal} onClose={() => setShowModal(false)} formattedTotal={formattedTotal} />
            </section>
        </>
    );
}
 
export default Waitlist;

export async function getStaticProps() {
    const { total } = await totalDocuments();
    const formattedTotal = total.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        useGrouping: true,
      }).replace(/,/g, ' ');
    return {
      props: { formattedTotal },
    };
}