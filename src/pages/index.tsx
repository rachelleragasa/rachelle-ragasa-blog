import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../index.css";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const wrapper = {
  display: "flex",
};

const typing = {
  width: "31ch",
  animation: "typing 2s steps(31), blink .5s step-end infinite alternate",
  whiteSpace: "nowrap",
  overflow: "hidden",
  borderRight: "3px solid",
  fontFamily: "monospace",
  fontSize: "2em",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <div style={wrapper}>
        <p style={typing}>Popped out. Be right back soon!</p>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Rachelle Ragasa | Frontend Engineer</title>
);
