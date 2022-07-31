import React from "react"
import {Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/header.css"
import { siteMetadata } from "../../gatsby-config"

export default function Header(){

    return(
        <header>            
            <Link to ="/" style={{textDecoration: 'none'}}>
                <div className="title">
                    <div className="logo-image">
                        <StaticImage
                            alt="HomePageLogo"
                            src="../../static/icon.png"
                        />
                    </div>
                    {siteMetadata.siteName}
                </div>
            </Link>
        </header>
    )
}