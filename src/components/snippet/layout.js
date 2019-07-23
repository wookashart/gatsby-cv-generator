import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { GlobalStyles } from '../global/GlobalStyles';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                    siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <GlobalStyles />
            {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
            <main>{children}</main>
            {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer> */}
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
