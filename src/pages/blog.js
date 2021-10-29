import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Navbar from "../components/navbar"
import '../scss/index.scss'
import '../scss/blog.scss'
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();


const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return(
      <main>
          <Navbar/>
          <div className="container">
              <div>
                  <h1 className="home-name">Blog</h1>
                  An experimental blog to write mostly about tech, or my hobbies if I ever get to have anything that's worth writing.
              </div>
              <div>
                  {Posts}
              </div>
          </div>
      </main>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
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
    }
  }
`
