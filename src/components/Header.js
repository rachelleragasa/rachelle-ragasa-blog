import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import { above } from "../styles"

const Header = ({ page, title }) => {
  return (
    <HeaderWrapper>
      <HeaderNav
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          <Title>{title}</Title>
        </Link>
        <div>
          <AboutLink>
            <Link
              to={
                page === 'info'
                  ? "/"
                  : "/info"
              }
            >
              {page === 'info'
                ? "close"
                : "info"}
            </Link>
          </AboutLink>
        </div>
      </HeaderNav>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  ${above.tablet`
    height: 100vh;
    width: 30%;
    position: fixed;
    left: 0;
    top: 0;
  `}
`

const HeaderNav = styled.nav`
  padding: 1.5rem 1.25rem;
  border-bottom: 1px solid #EBEBEB;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  ${above.tablet`
    padding: 2rem;
    height: 100%;
    border-right: 1px solid #EBEBEB;
    border-bottom: none;
    flex-direction: column;
    align-items: flex-start;
  `}

  img {
    margin-bottom: 0;

    ${above.tablet`
      margin-bottom: 0;
    `}
  }
`

const Title = styled.h1`
  margin-bottom: 0;
`

const AboutLink = styled.h2`
  margin-bottom: 0;
`

Header.propTypes = {
  page: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Header