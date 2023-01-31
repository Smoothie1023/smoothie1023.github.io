import React from 'react';
import Helmet from 'react-helmet';
import {Link , graphql} from 'gatsby';
import Layout from '../components/layout';
import Styles from "../styles/post.css"
import kebabCase from "lodash/kebabCase"


export default function Template({data}){
    const {markdownRemark: post}=data;
    //const post = data.markdownRemark;
    return (
        <Layout>
            <div className='mainContent'>
                <Helmet title={`スムージーの備忘録 - ${post.frontmatter.title}`}/>
                <h1>{post.frontmatter.title}</h1>
                <div>
                    {post.frontmatter.tags && post.frontmatter.tags.length > 0 && post.frontmatter.tags.map(tag=>{
                        return(
                            <Link className='tags' to={`/tags/${kebabCase(tag)}/`}itemProp="url">
                                    {tag}
                            </Link>
                        )
                    })}
                </div>
                <div dangerouslySetInnerHTML={{__html: post.html}}/>
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
            }
        }
    }
`