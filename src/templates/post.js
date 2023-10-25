import React from 'react';
import Helmet from 'react-helmet';
import {Link , graphql} from 'gatsby';
import Layout from '../components/layout';
import Styles from "../styles/post.css"
import kebabCase from "lodash/kebabCase"
import { useLocation } from "@reach/router"
import { siteMetadata } from '../../gatsby-config';


export default function Template({data}){
    const {markdownRemark: post}=data;
    const location = useLocation();
    //const post = data.markdownRemark;
    const cardPath = `${siteMetadata.siteUrl}${post.frontmatter.cardImage.publicURL}`;
    return (
        <Layout title={post.frontmatter.title} desc={post.frontmatter.description}>
            <div className='mainContent'>
                <Helmet>
                    <meta property="og.type" content="article" />
                    <meta property="og:url" content={location.pathname} />
                    <meta property="og:title" content={post.frontmatter.title} />
                    <meta property="og:image" content={cardPath} />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta property="og:description" content={siteMetadata.siteDescription} />
                    <meta name="twitter:card" content="summary" />
                    <meta name="description" content={siteMetadata.siteDescription} />
                    <meta name="twitter:site" content="@Smoothie1023" />
                    <meta name="twitter:url" content={location.pathname} />
                    <meta name="twitter:title" content={post.frontmatter.title} />
                    <meta name="twitter:description" content={siteMetadata.siteDescription} />
                    <meta name="twitter:image" content={cardPath} />

                </Helmet>
                <h1>{post.frontmatter.title}</h1>
                <h2></h2>
                <div>
                    {post.frontmatter.tags && post.frontmatter.tags.length > 0 && post.frontmatter.tags.map(tag=>{
                        return(
                            <Link className='tags_post' to={`/tags/${kebabCase(tag)}/`}itemProp="url">
                                    {tag}
                            </Link>
                        )
                    })}
                </div>
                <div dangerouslySetInnerHTML={{__html: post.html}}/>
            </div>
            <div className="returnPostPage_parent">
                <Link className="returnPostPage" to="../../blogs">←記事一覧</Link>
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter:{path:{eq: $path} }){
            html
            frontmatter{
                date(formatString: "MMMM DD,YYYY")
                path
                title
                tags
                description
                cardImage{
                    publicURL
                    absolutePath
                    dir
                    name
                }
            }
        }
    }
`