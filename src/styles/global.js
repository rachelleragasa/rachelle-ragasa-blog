import { createGlobalStyle } from "styled-components"

import reset from './reset'

const GlobalStyles = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css?family=Work+Sans&display=swap');

  body {
    font-family: "Work Sans","Helvetica Neue", Helvetica, sans-serif;
    overflow-x: hidden;
    color: #000;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: opacity .2s ease;
  }

  a:hover {
    transition: opacity .2s ease;
    opacity: .5;
    text-decoration-color: inherit;
  }
  ul {
    list-style: none;
    margin: 0;
  }

  //TYPOGRAPHY-------------------------------------

  h1, h2, h3, h4, h5, h6, p {
    font-family: "Work Sans","Helvetica Neue", Helvetica, sans-serif;
  }

  h1, h2 {
    font-weight: 500;
  }

  h1 {
    font-size: 2rem;
    letter-spacing: -1px;
    line-height: 1.1875;
  }

  h2 {
    font-size: 1.7rem;
    letter-spacing: -.75px;
    line-height: 1.2;
  }

  h3 {
    font-size: 1.2rem;
    letter-spacing: -.5px;
    line-height: 1.1875;
    color: #A0A0A0;
    font-weight: normal;
  }

  p {
    font-size: 1.2rem;
    letter-spacing: -.5px;
    line-height: 1.5;
    color: #464646;
  }

  // gatsby-image plugin container-----------------

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    min-height: 100%;
  }

  @media (min-width: 1280px) {

    h1 {
      font-size: 2rem;
      letter-spacing: -1px;
      line-height: 1.1875;
    }

    h2 {
      font-size: 1.5rem;
      letter-spacing: -.75px;
      line-height: 1.1667;
    }

    h3 {
      letter-spacing: -.5px;
      line-height: 1.1875;
      color: #A0A0A0;
      font-weight: normal;
    }

    p {
      line-height: 1.4375;
    }
  }
`

export default GlobalStyles