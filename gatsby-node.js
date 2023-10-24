const path = require('path');

exports.createPages = async ({actions ,graphql})=>{
    const { createPage } = actions ;

    const postTemplate = path.resolve(`src/templates/post.js`)
    const tagTemplate = path.resolve("src/templates/tags.js")
    const _ = require("lodash")

    const result = await graphql(`{
        allMarkdownRemark{
            totalCount
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
            group(field:{frontmatter:{tags:SELECT}}){
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

    const PRE_PAGE = 5;
    const TOTAL_POST = result.data.allMarkdownRemark.totalCount;
    const POST_PAGE = Math.ceil(TOTAL_POST/PRE_PAGE);
    for(let i = 0;i<POST_PAGE;i++){
        createPage({
            path:i===0?`blogs/`:`blogs/${i+1}`,
            component:path.resolve("./src/pages/blogs.js"),
            context:{
                limit:PRE_PAGE,
                skip:i*PRE_PAGE,
            },
        })
    }

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
}