import * as React from "react"
import { Helmet } from "react-helmet"
import { siteMetadata } from "../../gatsby-config"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby" 


const SEOHead = (props) => {
    const data = useStaticQuery(graphql`
    query{
        site {
            siteMetadata {
              lang
              siteName
              siteDescription
              siteUrl
            }
          }
        }
    `)
    const title = props.title ? `${props.title} | ${data.site.siteMetadata.siteName}` : data.site.siteMetadata.siteName
    const description = props.desc || data.site.siteMetadata.siteDescription
    const url  = props.url ? `${data.site.siteMetadata.siteUrl}${props.url}` : data.site.siteMetadata.siteUrl
    return (
        <Helmet
            htmlAttributes={{
                lang: `ja`,
            }}
        >
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
        </Helmet>
    )
}
export default SEOHead