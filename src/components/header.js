import React from "react"
import {Link} from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import "../styles/header.css"
import { siteMetadata } from "../../gatsby-config"

export default function Header(){

    return(
        <header>            
            <Link to ="/" style={{textDecoration: 'none'}}>
                <div className="header">
                    <div className="titletext">
                        {siteMetadata.siteName}
                    </div>
                </div>
            </Link>
        </header>
    )
}