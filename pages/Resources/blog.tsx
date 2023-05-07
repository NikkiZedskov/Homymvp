import Head from "next/head";
import styles from '../../styles/blog.module.css';
import { PostCard, PostWidget, Categories } from '../../components';
import { getPosts } from '../../services';

const Blog = ({ posts }) => {
    return (
        <>
            <div className='container'>
                <Head>
                    <title>Blogg - Homy | Grunden för din finansiella resa</title>
                </Head>
                <div className={styles.grid}>
                    {posts.map((posts) => (
                        <PostCard posts={posts.node} key={posts.title}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Blog;

export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    return {
        props: { posts }
    }
}