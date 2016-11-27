import React from 'react'
import S from 'shorti'
import Header from '../partials/header'
import Nav from '../partials/nav'
import Footer from '../partials/footer'
import HeroUnit from '../partials/hero-unit'
export default class BasicPage extends React.Component {
  render() {
    const page = this.props.page
    return (
      <div>
        <Header page={page}/>
        <Nav />
        <main>
          <HeroUnit page={page}/>
          <div style={S('maxw-960 center-block p-15 mt-5 pb-40') }>
            <div dangerouslySetInnerHTML={{__html: page.content}}/>
          </div>
        </main>
        <Footer page={page}/>
      </div>
    )
  }
}