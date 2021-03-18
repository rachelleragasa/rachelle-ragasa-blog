import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./Header"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import GlobalStyles from "../styles/global"
import { above } from "../styles"

const Layout = ({ page, bgColor, children }) => {
  const { title, description } = useSiteMetadata()
  return (

    <LayoutWrapper
      page={page}
      bgColor={bgColor}
    >
      <Helmet>
        <html lang="en" />
        <title>{`${title} | Frontend Developer`}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=***REMOVED***"/>
        <script>  
          {`
          window.dataLayer = window.dataLayer || [];

          function gtag(){
            dataLayer.push(arguments);
          }

          gtag("js", new Date());
          gtag("config", "***REMOVED***");
        `}
        </script>
      </Helmet>
      <GlobalStyles />
      <Header page={page} title={title} />
      <Children>{children}</Children>
    </LayoutWrapper>

  )
}

const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ bgColor }) => bgColor ? bgColor : "inherit"};

  ${above.tablet`
    display: block;
  `}

  ${({ page }) => page === "info" && `
    color: #FFFFFF;
  `}
`

const Children = styled.div`
  flex-grow: 1;

  ${above.tablet`
    flex-grow: none;
    width: 70%;
    margin-left: 30%;
  `}
`

Layout.propTypes = {
  page: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout