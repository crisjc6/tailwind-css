import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
    <h1>About</h1>
    <h1>Hi people</h1>
    <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
      Click me
    </button>
    <div className="container mx-auto mt-5 text-center">
      <div className="py-5  grid grid-cols-3 gap-4">
        <div className="bg-red-400">A</div>
        <div className="bg-red-400">B</div>
        <div className="bg-red-400">C</div>
      </div>
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </div>
    <h2>Lorem Ipsum</h2>
    <p>
      Voluptate Lorem laborum eiusmod occaecat fugiat exercitation cupidatat
      nulla. Consectetur labore aute irure dolore. Lorem adipisicing excepteur
      mollit nisi non exercitation. Aute quis consequat duis aliquip magna. Et
      ullamco officia nulla labore exercitation ea officia pariatur
      excepteur.Veniam officia anim nostrud pariatur sit ullamco non eu. Laboris
      cupidatat ad velit minim magna velit laboris magna reprehenderit sit
      proident do consectetur exercitation. Proident ea veniam ad adipisicing
      quis ut ipsum anim. Ullamco cillum non dolore elit sunt elit. Labore quis
      laborum cillum quis reprehenderit laborum esse minim elit eu non ea sunt
      velit. Non incididunt ullamco minim nostrud.Labore et anim labore ut et.
      Pariatur mollit qui sint eiusmod cupidatat officia veniam aliqua fugiat
      deserunt commodo ad nisi sit. Ut do irure laborum nisi in culpa ad. Dolore
      ea aute deserunt nulla labore anim. Aliquip duis excepteur veniam id
      exercitation anim incididunt elit veniam officia ex aliqua id.
    </p>
  </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
