import React from "react"
import Layout from "../components/layout"
import Style from "../styles/blog.css"
import { graphql ,Link} from 'gatsby';
import kebabCase from "lodash/kebabCase"
/*import { siteMetadata } from "../../gatsby-config"*/

export default function Blog({data}){
    return(
        <Layout>
            <h2 className="headline">ブログ記事一覧</h2>
            <div>
            {data.allMarkdownRemark.edges.map(({node},index)=>(
                <div id={index}>
                <article>
                    <Link to={node.frontmatter.path}>
                    <header>
                        <h2>
                             {node.frontmatter.title}
                        </h2>
                        <div>
                            {node.frontmatter.tags && node.frontmatter.tags.length > 0 && node.frontmatter.tags.map(tag=>{
                            return(
                                <Link  className='tags_tags' to={`/tags/${kebabCase(tag)}/`}itemProp="url">
                                    {tag}
                                </Link>
                                )
                            })}
                        </div>
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
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges{
                node{
                    id
                    frontmatter {
                        date(formatString: "YYYY/MM/DD")
                        path
                        title
                        tags
                    }
                }
                
            }
            group(field: frontmatter___tags){
                tag:fieldValue
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

/*
                        <div className="cate">
                            カテゴリ:
                        </div>
                        <div className="tag">
                            タグ:
                        </div>
*/