import React from "react"
import { graphql } from "gatsby"
import '../scss/index.scss'
import '../scss/blog.scss'
import Navbar from "../components/navbar"


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, fields } = markdownRemark
  return (
    <main>
      <Navbar/>
      <div className="container">
    <div className="blog-post-container">
      <div className="blog-post">
        <h1 className="blog-title">{frontmatter.title}</h1>
        <p ><span className="blog-date">{frontmatter.date}</span></p>
        <p ><span className="reading-time-blog">{fields.readingTime.text}</span></p>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </div>
    </main>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        summary
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
