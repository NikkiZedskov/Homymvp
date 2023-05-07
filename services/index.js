import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {

    const query = gql `
        query myQuery {
            postsConnection(orderBy: publishedAt_DESC) {
            edges {
                node {
                    createdAt
                    slug
                    excerpt
                    featuredImage {
                        url
                    }
                    title
                    categories {
                        name
                        slug
                    }
                }
            }
            }
        }
    `
    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
};

export const getPostDetails = async (slug) => {

    const query = gql `
        query getPostDetails($slug: String!) {
            post(where: { slug: $slug }) {
                createdAt
                slug
                excerpt
                featuredImage {
                    url
                 }
                title
                 categories {
                    name
                    slug
                 }
                 content {
                    raw
                  }
                  content2 {
                    raw
                  }
                  content3 {
                    raw
                  }
                  content4 {
                    raw
                  }
                  content5 {
                    raw
                  }
                  postImage {
                    url
                  }
                  postImage2 {
                    url
                  }
                  postImage3 {
                    url
                  }
            }
        }
    `
    const result = await request(graphqlAPI, query, { slug });

    return result.post;
};