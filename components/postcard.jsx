import styles from '../styles/blog.module.css';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

const PostCard = ({ posts }) => {
    return (
        <>  
            <Link href={`/Resources/post/${posts.slug}`}>
                <div className={styles.post}>
                    <div style={{width: '100%', height: '50%', position: 'relative'}}>
                        <Image
                        src={posts.featuredImage.url}
                        fill
                        priority
                        alt={posts.title}
                        />
                    </div>
                    <div className={styles.postcard}>
                        <h3>{posts.title}</h3>
                        <span>{moment(posts.createdAt).format('DD MMM YYYY')}</span>
                    </div>
                </div>
            </Link>
        </>
    );
}
 
export default PostCard;