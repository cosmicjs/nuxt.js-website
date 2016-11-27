import React from 'react'
import BasicPage from '../templates/basic-page'
import Cosmic from '../models/cosmic'
export default class Home extends React.Component {
  static async getInitialProps () {
    return await Cosmic.getPage('home')
  }
  render () {
    const page = this.props.object
    return <BasicPage page={page}/>
  }
}