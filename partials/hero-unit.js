import React from 'react'
import S from 'shorti'
export default class HeroUnit extends React.Component {
  render() {
    const page = this.props.page
    return (
      <div className="hero-unit" style={{...S(`relative bg-cover bg-center w-100p`), background: `linear-gradient(140deg,${page.metafield.hero_gradient_color_hex_start.value} 10%,${page.metafield.hero_gradient_color_hex_end.value} 90%) center/cover no-repeat`}}>
        <h1 style={S('color-fff text-center absolute t-35p w-100p')}>{page.metafield.headline.value}</h1>
      </div>
    )
  }
}