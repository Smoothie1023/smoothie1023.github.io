import React from "react";
import Layout from "../components/layout";
import {graphql , Link} from 'gatsby';
import Style from "../styles/blog.css"
import kebabCase from "lodash/kebabCase"

export default function Tags({data}){
    // タグの重複を排除するためのセットを作成
    const uniqueTags = new Set();
    // タグごとの記事数を格納するオブジェクト
    const tagCounts = {};

    // クエリの結果からタグを取り出してセットに追加
    data.allMarkdownRemark.nodes.forEach(node => {
        const { tags } = node.frontmatter;
        tags.forEach(tag => uniqueTags.add(tag));
    });

    // クエリの結果からタグを取り出して記事数をカウント
    data.allMarkdownRemark.nodes.forEach(node => {
        const { tags } = node.frontmatter;

        tags.forEach(tag => {
            if (tagCounts[tag]) {
                tagCounts[tag]++;
            } else {
                tagCounts[tag] = 1;
            }
        });
    });

  // セットから重複のないタグのリストを取得
    const uniqueTagsList = Array.from(uniqueTags);
    return(
        <Layout>
            <h2 className="headline">タグ一覧</h2>
            <div>
            <div>
                {uniqueTagsList.map((tag, index) => (
                <div key={index}>
                <article>
                    <Link className="BlogLink" to={`/tags/${kebabCase(tag)}`}>
                    <header>
                        <h2>
                            {tag}
                        </h2>
                    </header>
                    <footer>
                        記事：{tagCounts[tag]}件
                    </footer>
                    </Link>
                </article>
            </div>
        ))}
            </div>
        </div>
        </Layout>
    )
}

export const query = graphql`
    query{
        allMarkdownRemark(
            filter: {frontmatter: {path: {regex: "/^((?!invalidate).)*$/"}}},
        ){
            totalCount
            nodes{
                frontmatter{
                    tags
                }
            }
        }
    }
`