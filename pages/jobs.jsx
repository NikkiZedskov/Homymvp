import Link from "next/link";
import styles from '../styles/jobs.module.css';
import Head from "next/head";

const Jobs = () => {
    return (
        <>
            <div className='container'>
                <Head>
                    <title>Work with us | Homy</title>
                </Head>
                <div className={styles['join-the-journey']}>
                    <h1>Join the journey</h1>
                    <h3>Open positions</h3>
                    <p className={styles.about}>Homy is an initiative to transition real estate from paperwork and thirdparties to a frictionless and digital industry. Saving our customers thousands of dollars, weeks of time and stress.</p>
                    <p className={styles.sm}>You‘ll be an early member of a small team developing and driving large-scale adoption of technologies disrupting real estate.</p>
                    <p className={styles.bm}>You might be a good fit if you:</p>
                    <ul>
                        <li>Always try to perform 100%</li>
                        <li>Have experience with React</li>
                        <li>Have some experience or interest in solidity and smart contracts</li>
                        <li>Have backend experience</li>
                        <li>Have design experience</li>
                        <li>Can write clean, reusable code</li>
                        <li>Are confident building animations, gestures, and UI state managers</li>
                        <li>Care about that last 10% that makes apps feel nice</li>
                        <li>Have ideas about what the future of blockchain could look like</li>
                        <li>Can use mockup and UI prototyping tools to express your ideas</li>
                        <li>Like working on small, fast-moving teams</li>
                        <li>Like learning and building new things</li>
                        <li>Love finding that moment when users are delighted</li>
                    </ul>
                    <p className={styles.bm}>We’re a fully remote team, if some of the points listed above applies to you apply to <span className={styles.link}>info@homy.digital</span> with:</p>
                    <ul>
                        <li>A resume or CV (link or PDF)</li>
                        <li>A cover letter that tells us why you care about this problem and how your skills equip you to work on it (link, PDF or email)</li>
                        <li>A link to your GitHub, GitLab, or a portfolio of past work</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
 
export default Jobs;