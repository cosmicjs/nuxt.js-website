import variables from './variables'
export default `
  body,
  html {
    font-family: 'Source Sans Pro', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 20px;
    font-weight: 300;
    background: #333;
  }
  h1 {
    text-shadow: .5px .5px #333;
    font-weight: 300;
    font-size: 60px;
  }
  a {
    transition: 100ms;
    text-decoration: none;
    color: ${variables.brand.primary}
  }
  ul li {
    display: inline-block;
  }
  .nav {
    background: #333;
    font-size: 18px;
  }
  .nav li {
    margin-right: 30px;
  }
  .nav li a {
    color: #fff;
  }
  .nav li a:hover {
    color: #ddd; 
  }
  .logo {
    position: relative;
    top: -20px;
    width: 0; 
    height: 0; 
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 18px solid #fff;
  }
  .hero-unit {
    height: 500px;
  }
  main {
    background: #fff;
  }
  .footer a {
    color: #fff;
  }
  .footer a:hover {
    color: #ddd; 
  }
  .footer i {
    transition: 100ms;
  }
  .footer i:hover {
    color: #ddd; 
  }
  @media (max-width: 768px) {
    .nav li {
      margin-right: 15px;
    }
    .hero-unit {
      height: 400px;
    }
    h1 {
      top: 38% !important;
      font-size: 50px;
    }
    .footer .col {
      width: 100% !important; 
    }
  }
  .clearfix:after {
     visibility: hidden;
     display: block;
     font-size: 0;
     content: " ";
     clear: both;
     height: 0;
     }
  .clearfix { display: inline-block; }
  * html .clearfix { height: 1%; }
  .clearfix { display: block; }
  .social-icon {
    font-size: 46px;
    color: #fff;
  }
`