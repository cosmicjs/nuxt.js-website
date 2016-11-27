import React from 'react'
import BasicPage from '../templates/basic-page'
import Cosmic from '../models/cosmic'
export default class Contact extends React.Component {
  static async getInitialProps () {
    return await Cosmic.getPage('contact')
  }
  render () {
    const page = this.props.object
    return <BasicPage page={page}/>
  }
}