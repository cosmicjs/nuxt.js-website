import React from 'react'
import BasicPage from '../templates/basic-page'
import Cosmic from '../models/cosmic'
export default class Error extends React.Component {
  static async getInitialProps () {
    return await Cosmic.getPage('error')
  }
  render () {
    const page = this.props.object
    return <BasicPage page={page}/>
  }
}