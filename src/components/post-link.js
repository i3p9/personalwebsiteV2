import React from "react"
import { Link } from "gatsby"
import '../scss/index.scss'
import '../scss/blog.scss'

const PostLink = ({ post }) => (
  <Link to={post.frontmatter.slug} style={{textDecoration: "none"}}>
  <div className="card post-list-body">
    <div className="card-body">
    <h5 class="card-title post-list-title">
      {post.frontmatter.title}
    </h5>
    <p class="post-list-summary">{post.frontmatter.summary}</p>
    <span class="post-list-date">{post.frontmatter.date}</span><span class="post-list-readingtime">{post.fields.readingTime.text}</span>
    {/* <p class="post-list-readingtime"><span class="post-list-date">{post.frontmatter.date}</span>{post.fields.readingTime.text}</p> */}
    </div>
  </div>
  </Link>
)

export default PostLink
