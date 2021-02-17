import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/Layout"
import useBlogData from "../static_queries/useBlogData"
import { above } from "../styles"

const Blog = (props) => {
  const data = props.data.markdownRemark
  const allBlogData = useBlogData()
  const nextSlug = getNextSlug(data.fields.slug)

  function getNextSlug(slug) {
    const allSlugs = allBlogData.map(blog => {
      return blog.node.fields.slug
    })
    const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1]
    if(nextSlug !== undefined && nextSlug !== '') {
      return nextSlug
    } else {
      return allSlugs[0]
    }
  }

  return (
    <Layout>
      <BlogWrapper>
        <BlogHero>
          <GatsbyImg
            fluid={data.frontmatter.hero_image.childImageSharp.fluid}
            alt={data.frontmatter.title}
          />
        </BlogHero>
        <BlogInfo>
          <BlogTitle>{data.frontmatter.title}</BlogTitle>
          <BlogDate>{data.frontmatter.date}</BlogDate>
        </BlogInfo>
        <BlogBody dangerouslySetInnerHTML={{ __html: data.html }} />
        <BlogFooter>
          <h2>
            Written By: {data.frontmatter.author}
          </h2>
          <Link to={`blog/${nextSlug}`}>
            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" viewBox="0 0 26 26" enableBackground="new 0 0 26 26" >
              <path d="M23.021,12.294l-8.714-8.715l-1.414,1.414l7.007,7.008H2.687v2h17.213l-7.007,7.006l1.414,1.414l8.714-8.713  C23.411,13.317,23.411,12.685,23.021,12.294z"/>
            </svg>
          </Link>
        </BlogFooter>
      </BlogWrapper>
    </Layout>
  )
}

const BlogWrapper = styled.article`
  ${above.tablet`
    display: flex;
    flex-direction: column;
  `}
`

const BlogTitle = styled.h1`
  margin-bottom: 0.7rem;

  ${above.tablet`
    max-width: 500px;
    margin: 0 auto 0.66rem auto;
  `}
`

const BlogHero = styled.figure`
  min-height: 300px;
  height: 60vh;
  width: 100%;
  margin: 0;

  ${above.tablet`
    min-height: 600px;
    height: 75vh;
  `}

  ${above.desktopLarge`
    height: 70vh;
  `}
`

const GatsbyImg = styled(Img)`
  margin-bottom: 0;
  object-fit: cover;

  ${above.tablet`
    min-width: 100%;
  `}
`

const BlogInfo = styled.div`
  padding: 1.5rem 1.25rem;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;

  ${above.tablet`
    text-align: center;
    padding: 2rem 0;
  `}

  ${above.desktopLarge`
    padding: 3rem 0;
  `}
`

const BlogDate = styled.h3`
  margin-bottom: 0;
`

const BlogBody = styled.div`
  width: 100%;
  padding: 0 1.25rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${above.tablet`
    max-width: 800px;
    padding: 0 2rem;
  `}

  a {
    padding-bottom: 1.5rem;
  }
  :last-child {
    margin-bottom: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    padding: 1.5rem 1rem;
    line-height: 1.2;

    ${above.tablet`
      padding: 1.5rem;
    `}
  }
  p {
    color: #464646;
    font-weight: normal;
  }
  ul {
    list-style: initial;
  }
  ul,
  ol {
    margin-left: 1.25rem;
    margin-bottom: 1.25rem;
    padding-left: 1.45rem;

    ${above.tablet`
      margin-left: 1.5rem;
      margin-bottom: 1.5rem;
    `}
  }

  span {
    ${above.tablet`
      width: 100%;
      margin: 1rem auto;
    `}
  }
`

const BlogFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.25rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  h2 {
    margin-bottom: 0;
  }
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      width: 20px;
    }
  }

  ${above.tablet`
    padding: 2.25rem;
  `}

  ${above.desktopLarge`
    padding: 2rem 2rem 3rem 2rem;
  `}
`

export default Blog

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        author
        date(formatString: "MMMM Do, YYYY")
        hero_image {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
