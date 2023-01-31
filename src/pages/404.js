import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
//import Not_Fount_Img from "../../static/404.png"
import "../styles/404.css"

export default function NotFound(){
    return(
        <Layout>
            <div className="not-found-message">
                <h1>404 Not Found...</h1>
                お探しのページが見つかりませんでした。<br/>
                URLが間違っているか、ページが削除された可能性があります。<br/>
                <Link className="returnTop" to="/">←トップページに戻る</Link>
            </div>
        </Layout>
    )
}