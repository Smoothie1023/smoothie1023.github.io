import React from "react";
import { Link, graphql} from "gatsby"
import Layout from "../components/layout";
import kebabCase from "lodash/kebabCase"

const Tags=({pageContext,data})=>{

    const {tag} = pageContext;

    return (
    <Layout>
      <h1>
        {tag}タグの記事一覧
      </h1>
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
        <Link to="../../blogs">記事一覧ページ</Link>
        
      </div>
    </Layout>
  )
}

export default Tags

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