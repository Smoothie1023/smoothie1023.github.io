import React from "react"
import { Link } from "gatsby"
import Style from "../styles/pagination.css"

export const Pagination = ({ totalCount }) => {
  const PER_PAGE = 5

  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
            <Link to={`/blogs/${number==1?"":number}`}>{number}ページ</Link>
        </li>
      ))}
    </ul>
  )
}