import React from "react"
import Layout from "../components/layout"
import Update from "../components/update"
import "../styles/style.css"


export default function Home() {
  return (
    <Layout>
      <h2 className="subTitle">
        About
      </h2>
      <div className="content">
        <p>
          賢明に生きています。<br/>
          愛知県出身<br/>
          生年月日:2000/10/23<br/>
        </p>
      </div>
      <h2 className="subTitle">
        Link
      </h2>
      <div class="content">
        <ul>
          <li class="button"><a id="item" href="https://github.com/smoothie1023" target="_blank"> Github</a></li>
          <li class="button"><a id="item"href="https://twitter.com/Smoothie1023" target="_blank"> Twitter</a></li>
        </ul>
        <ul>
          <li class="button"><a id="item" href="blog"> Blog</a></li>
          <li class="button"><a id="item" href="https://www.pixiv.net/users/17647757 " target="_blank"> Pixiv</a></li>
        </ul>
      </div>

    </Layout>
  )
}

