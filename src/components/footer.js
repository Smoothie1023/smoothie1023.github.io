import React from "react"
import "../styles/footer.css"

export default function Footer(){
    return(
        <footer>
            <div class="copytight">
                <small>© {new Date().getFullYear()} Smoothie1023.</small>
            </div>
        </footer>
    )
}