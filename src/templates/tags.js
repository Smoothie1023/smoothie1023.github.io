import React from "react";
import { Link, graphql} from "gatsby"
import Styles from "../styles/tags.css"
import Layout from "../components/layout";
import kebabCase from "lodash/kebabCase"
import Helmet from 'react-helmet';
import { Pagination } from "../components/pagination";
import { siteMetadata } from "../../gatsby-config"
import { useLocation } from "@reach/router";
import SEOHead from "../components/seo";

export default function Tags({pageContext,data}){
    const location = useLocation();
    const {tag} = pageContext;
    return (
    <Layout title={tag} url={location.pathname}>
      <h2 className="headline">タグ:{tag}の記事一覧</h2>
      <div>
        {data.allMarkdownRemark.nodes.map((node)=>(
          <div>
          <article>
            <Link className="BlogLink" to={node.frontmatter.path}>
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
      <div className="returnPostPage_parent">
        <Link className="returnPostPage" to="../../blogs">←記事一覧</Link>
      </div>
    </Layout>
  )
}



export const pageQuery = graphql`
query ($tag: String) {
    allMarkdownRemark(
        limit: 2000
        sort: {frontmatter: {date: DESC}}
        filter: {frontmatter: {tags: {in: [$tag]},path: {regex: "/^((?!invalidate).)*$/"}}}
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