import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Not_Fount_Img from "../../static/404.png"
import "../styles/404.css"

export default function NotFound(){
    return(
        <Layout>
            <div className="not-found-message">
                <h1>404 Not Found...</h1>
                <Link to="/">トップページに戻る</Link>
            </div>
            <img src={Not_Fount_Img} className="not-found-image" alt="not found"/>
        </Layout>
    )
}