import styles from '../styles/blog.module.css';
import moment from 'moment';
import React from 'react';
import { useEffect } from 'react';
import Head from 'next/head';

const PostDetail = ({ post }) => {
    useEffect(() => {
      // Add the 'grey-bg' class to the body element
      document.body.classList.add(styles['grey-bg']);
  
      // Remove the 'grey-bg' class from the body element when the component unmounts
      return () => {
        document.body.classList.remove(styles['grey-bg']);
      };
    }, []);
  
    const getContentFragment = (index, text, obj, type) => {
      let modifiedText = text;
  
      if (obj) {
        if (obj.bold) {
          modifiedText = <b key={index}>{text}</b>;
        }
  
        if (obj.italic) {
          modifiedText = <em key={index}>{text}</em>;
        }
  
        if (obj.underline) {
          modifiedText = <u key={index}>{text}</u>;
        }
      }
  
      switch (type) {
        case 'heading-three':
          return (
            <h3 key={index} className={styles.heading_three}>
              {modifiedText.map((item, i) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
            </h3>
          );
        case 'paragraph':
          return (
            <p key={index} className={styles.paragraph}>
              {modifiedText.map((item, i) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
            </p>
          );
        case 'heading-four':
          return (
            <h4 key={index} className={styles.heading_four}>
              {modifiedText.map((item, i) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
            </h4>
          );
        case 'image':
          return <img key={index} alt={obj.title} src={obj.src} />;
        default:
          return modifiedText;
      }
    };
  
    return (
      <>
        <Head>
          <title>{post.title} | Homy - Blogg</title>
        </Head>
        <div className="container-2">
          <div className={styles.post_container}>
            <p className={styles.date}>
              {moment(post.createdAt).format('DD MMM, YYYY')}
            </p>
            <h2 className={styles.heading}>{post.title}</h2>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <img
              className={styles.featuredImage}
              src={post.featuredImage.url}
              alt={post.title}
            />
            {['content', 'postImage', 'content2', 'postImage2', 'content3', 'postImage3', 'content4', 'postImage4', 'content5'].map(
              (fieldName, index) => {
                const fieldContent = post[fieldName];
                if (fieldContent) {
                  if (fieldName.startsWith('content')) {
                    return (
                      <div key={index}>
                        {fieldContent.raw.children.map(
                          (typeObj, typeIndex) => {
                            const children = typeObj.children.map((item, itemindex) =>
                              getContentFragment(itemindex, item.text, item)
                            );
  
                            return getContentFragment(
                              typeIndex,
                              children,
                              typeObj,
                              typeObj.type
                            );
                          }
                        )}
                      </div>
                    );
                  } else {
                    return (
                      <img
                        className={styles.img}
                        key={index}
                        alt={post.title}
                        src={fieldContent.url}
                      />
                    );
                  }
                } else {
                  return null;
                }
              }
            )}
          </div>
        </div>
      </>
    );
};
  
  export default PostDetail;