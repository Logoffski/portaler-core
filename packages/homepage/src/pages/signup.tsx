import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import SignupForm from '../components/SignupForm'

import styles from './styles.module.scss'

const SignUpPage = () => (
  <Layout fixedWidth>
    <SEO description="Signup for Portaler" />
    <SignupForm />
  </Layout>
)

export default SignUpPage
