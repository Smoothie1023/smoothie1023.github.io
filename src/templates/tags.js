import React from "react";
import { Link, graphql} from "gatsby"
import Styles from "../styles/tags.css"
import Layout from "../components/layout";
import kebabCase from "lodash/kebabCase"

export default function Tags({pageContext,data}){

    const {tag} = pageContext;

    return (
    <Layout>
      <div className="headline">
        <h1>
          {tag}
        </h1>
      </div>
      
      <div>
        {data.allMarkdownRemark.nodes.map((node)=>(
          <div>
          <article>
            <Link to={node.frontmatter.path}>
            <header>
              <h2>
                {node.frontmatter.title}
              </h2>
              <div>
                {node.frontmatter.tags && node.frontmatter.tags.length > 0 && node.frontmatter.tags.map(tag=>{
                  return(
                    <Link to={`/tags/${kebabCase(tag)}/`}itemProp="url">
                      <button>{tag}</button>
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
      <div>
        <Link className="returnPostPage" to="../../blogs">←記事一覧</Link>
        
      </div>
    </Layout>
  )
}



export const pageQuery = graphql`
query ($tag: String) {
    allMarkdownRemark(
        limit: 2000
        sort: {order: DESC, fields: frontmatter___date}
        filter: {frontmatter: {tags: {in: [$tag]}}}
      ) {
        totalCount
        nodes{
          frontmatter{
            tags
            path
            date(formatString:"YYYY/MM/DD")
            title
          }
        }
      }
    }

`