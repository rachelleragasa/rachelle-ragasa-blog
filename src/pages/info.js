import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import { above } from "../styles"

const Info = () => {
  const { infoData } = useSiteMetaData()
  return (
    <Layout page="info" bgColor={infoData.background_color}>
      <InfoBlurb>
        <h2>
          <div dangerouslySetInnerHTML={{__html: infoData.description}}></div>
        </h2>
        <ul>
          <li>
            <p>
              <a target="blank" rel="noopener noreferrer" href={`mailto:${infoData.contact.email}`}>Email: {infoData.contact.email}</a>
            </p>
          </li>
          <li>
            <p>
              <a target="blank" rel="noopener noreferrer" href={`https://twitter.com/${infoData.contact.twitter_handle}`}>
                Twitter: @{infoData.contact.twitter_handle}
              </a>
            </p>
          </li>
          <li>
            <p>
              <a target="blank" rel="noopener noreferrer" href={`https://github.com/${infoData.contact.github_handle}`}>Github: {infoData.contact.github_handle}</a>
            </p>
          </li>
          <li>
            <p>
              <a target="blank" rel="noopener noreferrer" href={`https://www.linkedin.com/in/${infoData.contact.linkedin_handle}`}>LinkedIn: {infoData.contact.github_handle}</a>
            </p>
          </li>
          <li>
            <p>
              <a target="blank" rel="noopener noreferrer" href={`https://codepen.io/${infoData.contact.codepen_handle}`}>Codepen: {infoData.contact.github_handle}</a>
            </p>
          </li>
        </ul>
      </InfoBlurb>
    </Layout>
  )
}

const InfoBlurb = styled.section`
  max-width: 800px;
  padding: 1.5rem 1.25rem;

  p {
    color: #fff;
    font-size: 1.4rem;
  }

  ${above.tablet`
    padding: 2rem;
  `}

  ${above.desktopLarge`
    padding: 3rem;
  `}
`

export default Info