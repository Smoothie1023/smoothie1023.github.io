import React from "react";
import Layout from "../components/layout";
import {graphql , Link} from 'gatsby';
import Style from "../styles/blog.css"
import kebabCase from "lodash/kebabCase"

export default function Tags({data}){
    return(
        <Layout>
            <div>
                {data.allMarkdownRemark.nodes.map((node)=>(
                    <div>
                        {kebabCase(node.frontmatter.tags)}
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query{
        allMarkdownRemark{
            totalCount
            nodes{
                frontmatter{
                    tags
                }
            }
        }
    }
`