import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"

const NotFound = () => {
    return (
        <Layout page="404" bgColor="inherit">
            <NotFoundWrapper>
                <Link to="/">
                    <h1>Sorry, couldn't find that page.</h1>
                </Link>
            </NotFoundWrapper>
        </Layout>
    )
}

const NotFoundWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default NotFound