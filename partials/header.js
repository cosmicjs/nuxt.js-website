import React from 'react'
import Head from 'next/head'
import styles from '../styles/main'
export default class Header extends React.Component {
  render() {
    const page = this.props.page
    return (
      <Head>
        <title>{page.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="57x57" href="https://cdn.zeit.co/favicon/apple-touch-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="https://cdn.zeit.co/favicon/apple-touch-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="https://cdn.zeit.co/favicon/apple-touch-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="https://cdn.zeit.co/favicon/apple-touch-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="https://cdn.zeit.co/favicon/apple-touch-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="https://cdn.zeit.co/favicon/apple-touch-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="https://cdn.zeit.co/favicon/apple-touch-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="https://cdn.zeit.co/favicon/apple-touch-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.zeit.co/favicon/apple-touch-icon-180x180.png"/>
        <link rel="icon" type="image/png" href="https://cdn.zeit.co/favicon/favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" type="image/png" href="https://cdn.zeit.co/favicon/android-chrome-192x192.png" sizes="192x192"/><link rel="icon" type="image/png" href="https://cdn.zeit.co/favicon/favicon-96x96.png" sizes="96x96"/><link rel="icon" type="image/png" href="https://cdn.zeit.co/favicon/favicon-16x16.png" sizes="16x16"/>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400" rel="stylesheet"/>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
      </Head>
    )
  }
}