import React from "react"
import "../styles/layout.css"
import Header from "./header"
import Footer from "./footer"
import SEOHead from "./seo"

const Layout=({title, desc, url, children})=>{
    return (
        <div className="layout">
            <SEOHead title={title} desc={desc} url={url}/>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout