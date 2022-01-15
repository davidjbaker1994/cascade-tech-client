/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"

import Header from "./header"
import "./layout.css"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const identity = useIdentityContext();
  const [dialog, setDialog] = useState(true);
  const name = (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.name) || "NoName";

  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <nav style={{ background: "green" }}>
        {" "}
        Login Status:
          {isLoggedIn ? `Hello ${name}, Log out here!` : "LOG IN"}
      </nav>
      <main>{children}</main>
      <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
      <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
