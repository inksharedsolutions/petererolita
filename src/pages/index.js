import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Banner from "../components/banner"
import UpperMain from "../components/upper-main"
import MidMain from "../components/mid-main"
import Newsletter from "../components/newsletter"

const IndexPage = (props) => (
  <Layout>
  <Helmet title="Home | Peter E. Rolita"/>
      <Nav pathExt={props.path}/>
      <Banner/> 
      <UpperMain/> 
      <MidMain/>
      <Newsletter/> 
  </Layout>
)

export default IndexPage
