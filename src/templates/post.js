import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';



export default function Template({data}){
    const {markdownRemark: post}=data;
    //const post = data.markdownRemark;
    return (
        <div>
            <Helmet title={`スムージーの備忘録 - ${post.frontmatter.title}`}/>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.html}}/>
        </div>
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
            }
        }
    }
`