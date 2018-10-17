import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Blog = () => (
  <StaticQuery
    query={graphql`
      query Blog {
        contentfulBlog {
          title
          date
          content {
            childMarkdownRemark {
              html
            }
          }
          image {
            file {
              url
            }
          }
        }
      }
    `}
    render={({
      contentfulBlog: {
        title,
        date,
        content: { 
          childMarkdownRemark : { html }
         },
        image: {
          file: { url }
        }
      }
    }) => (
      <>
        <h1>{title}</h1>
        <small>Created on {date}</small>
        <img src={url} alt="image" />
        <div dangerouslySetInnerHTML={{__html: html}} />
      </>
    )}
  />
);

export default Blog;