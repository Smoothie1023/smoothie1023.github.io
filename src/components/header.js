import React from "react"
import { Link } from "gatsby"
import Logo from "../../static/icon.png"
import "../styles/header.css"

export default function Header(){
    return(
        <header>
            
            <Link to ="/" style={{textDecoration: 'none'}}>
                <div className="title">
                    <img src={Logo} className="logo-image" alt="logo"/>スムージーの備忘録
                </div>
            </Link>
           
            
        </header>
    )
}