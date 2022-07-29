import React from "react"
import Layout from "../components/layout"
import "../styles/blog.css"
import { graphql ,Link} from 'gatsby';
/*import { siteMetadata } from "../../gatsby-config"*/

export default function Blog({data}){
    console.log( data.allMarkdownRemark);
    return(
        <Layout>
            <h2 className="subTitle">Blog</h2>
            <div>
            {data.allMarkdownRemark.edges.map(({node},index)=>(
                <div id={index}>
                <article>
                    <Link to={node.frontmatter.path}>
                    <header>
                        <h2>
                             {node.frontmatter.title}
                        </h2>
                    </header>
                    <footer>
                        {node.frontmatter.date}
                    </footer>
                    </Link>
                </article>
                </div>
            ))}
            </div>
            
        </Layout>
    )
}

export const query = graphql`
    query{
        allMarkdownRemark {
            edges{
                node{
                    id
                    frontmatter {
                        date(formatString: "YYYY/MM/DD")
                        path
                        title
                    }
                }
                
            }
        }
    }
`

/*
<div key={index}  className="article" id="articleButton">
    <h2>
        <Link to={node.frontmatter.path}> {node.frontmatter.title}</Link>
    </h2>
    <br/>               
    <span><Link to={node.frontmatter.path}> {node.frontmatter.date}</Link></span>
</div>
*/