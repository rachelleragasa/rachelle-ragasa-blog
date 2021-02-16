import { css } from "styled-components"

export const breakpoint = {
  tablet: "768px",
  tabletLarge: "1280px",
  desktopLarge: "1440px",
}

export const above = Object.keys(breakpoint).reduce((acc, name) => {
  acc[name] = (...args) => css`
    @media (min-width: ${breakpoint[name]}) {
      ${css(...args)}
    }
  `
  return acc
}, {})