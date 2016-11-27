import React from 'react'
import S from 'shorti'
import Link from 'next/link'
export default class Nav extends React.Component {
  render() {
    const page = this.props.page
    return (
      <nav className="nav" style={ S('absolute w-100p text-center z-1 h-60') }>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/"><i className="logo"></i></Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
}