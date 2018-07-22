import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import ShaneImage from './shane.jpg'

const IndexPage = () => (
  <Layout>
    <div>
      Here is an image
      <img src={ShaneImage} />
    </div>
  </Layout>
)

export default IndexPage
