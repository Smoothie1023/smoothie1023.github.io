/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {

  siteMetadata:{
    siteName:'スムージーの備忘録',
    siteDescription:'ポートフォリオ兼得た知見をまとめるブログ',
    siteAuthor:'Smoothie1023',
    siteUrl:'https://blog.ryukey.net/'
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve:'gatsby-transformer-remark',
      options:{
        plugins:[
          'gatsby-remark-code-titles',
          'gatsby-remark-relative-images',
          {
            resolve:'gatsby-remark-images',
            options:{
              maxWidth:700,
            },
          },
          {
            resolve:'gatsby-remark-prismjs',
            options:{
              classPrefix:"language-",
              inlineCodeMarker:null,
              aliases:{},
              showLineNumbers:true,
              noInlineHighlight:false,
            },
          },
        ],
      },
    },
    {
      resolve:'gatsby-source-filesystem',
      options:{
        path:`${__dirname}/src/pages`,
        name:'pages',
      }
    },
    {
      /*favicon設定など */
      resolve:'gatsby-plugin-manifest',
      options:{
        name:'スムージーの備忘録',
        short_name:"スムージーの備忘録",
        start_url:"/",
        background_color:'#fff',
        theme_color: `#ffb78a`,
        display:'browser',
        icons:[
          {
            "src":"static/favicon.ico",
            "sizes":"32x32",
            "type":"image/ico"
          },
          {
            "src":"static/favicon.ico",
            "sizes":"48x48",
            "type":"image/ico"
          },
          {
            "src":"static/favicon.ico",
            "sizes":"64x64",
            "type":"image/ico"
          },
          {
            "src":"static/favicon.ico",
            "sizes":"128x128",
            "type":"image/ico"
          },
          {
            "src":"static/favicon.ico",
            "sizes":"256x256",
            "type":"image/ico"
          },
        ],
      }
    },
  ],
}

