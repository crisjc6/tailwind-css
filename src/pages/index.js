import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <h2>Hi people</h2>
    <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
      Click me
    </button>
    <div className="container mx-auto mt-5 text-center">
      <div className="py-5  grid grid-cols-3 gap-4">
        <div className="bg-red-400">A</div>
        <div className="bg-red-400">B</div>
        <div className="bg-red-400">C</div>
      </div>

      <div className="grid"></div>
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </div>
  </Layout>
)

export default IndexPage
