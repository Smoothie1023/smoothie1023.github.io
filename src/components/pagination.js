import React from "react"
import { Link } from "gatsby"
import Style from "../styles/pagination.css"

export const Pagination = ({ totalCount }) => {
  const PER_PAGE = 10

  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul className='pagination'>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li className='pagination' key={index}>
            <Link className='pagination_button' to={`/blogs/${number==1?"":number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  )
}