import React from 'react';    
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"
//import UserLoginForm from "../components/user-login-form"



const IndexPage = () => {
  
  return (
    <Layout>
      <Seo title="Home" />
      
      
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
  
export default IndexPage
