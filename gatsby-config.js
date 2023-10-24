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
    siteUrl:'https://blog.ryukey.com/'
  },
  /* Your site config here */
  plugins: [
    "gatsby-remark-copy-linked-files",
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
      },
    },
    {
    resolve:`gatsby-plugin-nprogress`,
    options:{
      color:`#a3621c`,
      minimum:1,
      easing:'liner',
      positionUsing:'',
      speed:200,
      trickle:true,
      trickleSpeed:200,
      barSelector:'[role="bar"]',
      spinnerSelector:'[role="spinner"]',
      parent:'body',
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
      }
    },
    {
      /*favicon設定など */
      resolve:'gatsby-plugin-manifest',
      options:{
        name:'スムージーの備忘録',
        short_name:"スムージーの備忘録",
        start_url:"/",
        background_color:'#F5F5F5',
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
  trailingSlash: `never`,
}

