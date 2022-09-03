const path = require('path');

exports.createPages = async ({actions ,graphql})=>{
    const { createPage } = actions ;

    const postTemplate = path.resolve(`src/templates/post.js`)
    const tagTemplate = path.resolve("src/templates/tags.js")
    const _ = require("lodash")

    const result = await graphql(`{
        allMarkdownRemark{
            edges{
                node{
                    frontmatter{
                        path
                        tags
                    }
                }
            }
        }
        tagsGroup:allMarkdownRemark(limit:2000){
            group(field:frontmatter___tags){
                fieldValue
            }
        }
    }`)

    if(result.errors){
        return Promise.reject(result.errors);
    }

    const posts= result.data.allMarkdownRemark.edges
    const tags=result.data.tagsGroup.group

    posts.forEach(({node})=>{
        createPage({
            path:node.frontmatter.path,
            component:postTemplate,
            context:{}
        })
    })

    if(tags.length>0){
        tags.forEach(tag=>{
            createPage({
                path:`/tags/${_.kebabCase(tag.fieldValue)}`,
                component:tagTemplate,
                context:{
                    tag:tag.fieldValue,
                },
            })
        })
    }

    

/*
    return graphql(`{
        allMarkdownRemark{
            edges {
                node {

                    frontmatter{
                        path
                        tags
                    }
                }
            }
        }
        tagsGroup:allMarkdownRemark(limit:2000){
            group(field:frontmatter___tags){
                fieldValue
            }
        }
    }`)
    .then(res =>{
        if(res.errors){
            return Promise.reject(res.errors);
        }

        res.data.allMarkdownRemark.edges.forEach(({node})=>{
            createPage({
                path: node.frontmatter.path,
                component: postTemplate,
                context:{}
            })
        })

        const tags=res.data.tagsGroup.group
        if (tags.length > 0) {
            tags.forEach(tag => {
              createPage({
                path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
                component: tagTemplate,
                context: {
                  tag: tag.fieldValue,
                },
              })
            })
          }
    })
*/
}