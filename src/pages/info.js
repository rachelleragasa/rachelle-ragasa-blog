import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import { above } from "../styles"
import email from "../assets/icons/email.svg"
import twitter from "../assets/icons/twitter.svg"
import github from "../assets/icons/github.svg"
import linkedin from "../assets/icons/linkedin.svg"
import codepen from "../assets/icons/codepen.svg"


const Info = () => {
  const { infoData } = useSiteMetaData()
  return (
    <Layout page="info" bgColor={infoData.background_color}>
      <InfoBlurb>
        <h2>
          <div dangerouslySetInnerHTML={{__html: infoData.description}}></div>
        </h2>
        <SocialLinks>
          <li>
            <p>
              <a target="blank" rel="noopener noreferrer" href={`mailto:${infoData.contact.email}`}><Icon src={email} alt="Send me an email" /></a>
            </p>
          </li>
          <li>
            <p>
              <a target="blank" rel="noopener noreferrer" href={`https://twitter.com/${infoData.contact.twitter_handle}`}>
                <Icon src={twitter} alt="Follow me on Twitter" />
              </a>
            </p>
          </li>
          <li>
            <p>
              <a target="blank" rel="noopener noreferrer" href={`https://github.com/${infoData.contact.github_handle}`}>
              <Icon src={github} alt="Check out my Github page" />
              </a>
            </p>
          </li>
          <li>
            <p>
              <a target="blank" rel="noopener noreferrer" href={`https://www.linkedin.com/in/${infoData.contact.linkedin_handle}`}>
              <Icon src={linkedin} alt="Checkout my LinkedIn profile here" />
              </a>
            </p>
          </li>
          <li>
            <p>
              <a target="blank" rel="noopener noreferrer" href={`https://codepen.io/${infoData.contact.codepen_handle}`}>
              <Icon src={codepen} alt="Checkout my latest pens" />
              </a>
            </p>
          </li>
        </SocialLinks>
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

const Icon = styled.img`
  width: 32px;
  height: 32px;
`

const SocialLinks = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 300px;
`

export default Info