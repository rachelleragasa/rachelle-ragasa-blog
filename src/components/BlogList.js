import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import useBlogData from "../static_queries/useBlogData"
import { above } from "../styles"

const BlogList = () => {
  const blogData = useBlogData()
  function renderBlogData() {
    return (
      <>
        {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .map(blog => {
            return (
              <ListItem key={blog.node.fields.slug}>
                <GatsbyLink to={`/blog/${blog.node.fields.slug}`} key={blog.node.id}>
                  <ListHero>
                    <Img
                      fluid={
                        blog.node.frontmatter.hero_image.childImageSharp.fluid
                      }
                      alt={blog.node.frontmatter.title}
                    />
                  </ListHero>
                  <ListInfo>
                    <h2>{blog.node.frontmatter.title}</h2>
                    <h3>{blog.node.frontmatter.date}</h3>
                    <p>{blog.node.excerpt}</p>
                  </ListInfo>
                </GatsbyLink>
              </ListItem>
            )
          })}
      </>
    )
  }
  return (
    <section>
      <List>{renderBlogData()}</List>
    </section>
  )
}

const List = styled.ul`
  h2 {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  h3 {
    margin-bottom: 1rem;

    ${above.desktop`
      margin-bottom: 1.2rem;
    `}
  }

  p {
    max-width: 900px;
  }
`

const ListItem = styled.li`

`


const GatsbyLink = styled(Link)`
  &:hover {
    opacity: 1;

    > div {
      div {
        picture {
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
      }
    }

    ${above.tablet`
      h2,
      h3,
      p {
        -webkit-transform: translateX(10px);
        transform: translateX(10px);
        -webkit-transition: transform 0.5s ease-out;
        transition: transform 0.5s ease-out;
      }
    `}
  }

  opacity: inherit;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 38vh;
  margin-bottom: 0;

  ${above.tablet`
    min-height: 250px;
    height: 33.333vh;
    flex-direction: row;
  `}
`

const ListHero = styled.div`
  width: 100%;
  height: 33vh;
  overflow: hidden;
  background-color: #fff;

  img {
    object-fit: cover;
    object-position: 50% 50%;
    min-height: 100%;

    ${above.tablet`
      min-width: 100%;
      height: 100%;
      width: auto;
      min-height: 0;
    `}
  }

  div {
    picture {
      opacity: 1;
      -webkit-transition: opacity 0.3s ease;
      transition: opacity 0.3s ease;
    }
  }

  ${above.tablet`
    height: 100%;
  `}
`

const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem 1.25rem;
  border-bottom: 1px solid #ebebeb;

  h2,
  h3,
  p {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
    -webkit-transition: transform 0.5 ease-out;
    transition: transform 0.5s ease-out;
  }

  ${above.tablet`
    min-width: 70%;
  `}

  ${above.desktop`
    padding: 3rem;
  `}
`


export default BlogList

