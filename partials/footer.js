import React from 'react'
import S from 'shorti'
export default class Footer extends React.Component {
  render() {
    const page = this.props.page
    return (
      <div>
        <footer className="footer" style={S('w-100p bg-333 color-fff font-18')}>
          <div style={S('maxw-960 center-block p-15 pt-40 pb-60')}>
            <div className="col" style={S('w-60p pull-left')}>
              <div style={S('mb-20')}>React Framework<br/><a href="https://github.com/zeit/next.js" target="_blank">Next.js</a></div>
              <div style={S('mb-20')}>Lorem Ipsum by<br/><a href="http://spaceipsum.com" target="_blank">http://spaceipsum.com</a></div>
              <div style={S('mb-20')}>UI Gradients by<br/><a href="http://uigradients.com" target="_blank">http://uigradients.com</a></div>
            </div>
            <div className="col" style={S('w-40p pull-left')}>
              <div style={S('mb-20')}>
                <a style={S('mr-15')} href="https://github.com/cosmicjs" target="_blank">
                  <i className="fa fa-github social-icon"></i>
                </a>
                <a href="https://twitter.com/cosmic_js" target="_blank">
                  <i className="fa fa-twitter social-icon"></i>
                </a>
              </div>
              <div style={S('mb-20')}>&copy; { new Date().getFullYear() } Cosmic JS</div>
              <div style={S('mb-20')}>
                <a href="https://cosmicjs.com" target="_blank">
                  <img style={S('pull-left relative mr-15')} src="https://cosmicjs.com/images/logo.svg" width="28" height="28"/>
                  <span className="powered-by">Proudly powered by Cosmic JS</span>
                </a>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </footer>
      </div>
    )
  }
}