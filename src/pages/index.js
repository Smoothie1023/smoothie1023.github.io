import React from "react"
import Layout from "../components/layout"

import "../styles/portal.css"
import { siteMetadata } from "../../gatsby-config"
import { useLocation } from "@reach/router"
import SEOHead from "../components/seo"

export default function Home() {
  const location = useLocation();
  return (
    <Layout url={location.pathname}>
      <h2 className="Headline">
        About
      </h2>
      <div className="content">
        <p>
          賢明に生きています。<br/>
          愛知県出身<br/>
          生年月日:2000/10/23<br/>
        </p>
      </div>
      <h2 className="Headline">
        Link
      </h2>
      <div class="LinkButton">
        <div class="button"><a id="item" href="blogs"> Blog</a></div>
        <div class="button"><a id="item"href="https://twitter.com/Smoothie1023" target="noopener noreferrer"> &#x1D54F;(Twitter)</a></div>
        <div class="button"><a id="item" href="https://github.com/smoothie1023" target="noopener noreferrer"> Github</a></div>
        <div class="button"><a id="item" href="https://www.pixiv.net/users/17647757 " target="noopener noreferrer"> Pixiv</a></div>
      </div>
    </Layout>
  )
}

