import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
<footer className="footer-area">
  <div className="footer-top style-3  padding-top-80 padding-bottom-80">
    <div className="nav-container">
      <div className="footer-widget-content-wrapper">
        <div className="footer-widget-content">
          <div className="footer-widget widget">
            <div className="about_us_widget padding-bottom-10">
              <Link to="/" className="footer-logo"> <img src="assets/img/logo/logo.png" alt="footer logo" /></Link>
            </div>
            <div className="footer-widget widget widget_nav_menu ">
              <ul className="footer-link">
                <li><Link to="/about-us">About</Link></li>
                <li><Link to="/terms-and-conditions">Terms</Link></li>
                <li><Link to="/contact-us">Contact</Link></li>
              </ul>
            </div>
            <div className="copyright-area-inner">
              <div className="qry-copy">
                © GAMITUP <span className="current-year" /> All right reserved.
              </div>
            </div>
            

            <div className="footer-widget widget white-effect margin-top-25">
              <img src='assets/img/payment/waystoPay.png' />
            </div>

            <div className="footer-widget widget white-effect">
              <div className="footer-icon margin-top-25">
                <a href="https://web.facebook.com/Gamitup-101438528557374" target="_blank"><i className="flaticon-facebook-logo" /></a>
                {/*<a href="https://twitter.com/codingeeknet" target="_blank"><i className="flaticon-twitter" /></a>
                <a href="https://www.linkedin.com/company/codingeek" target="_blank"><i className="flaticon-linked-in-logo-of-two-letters" /></a>*/}
                <a href="https://www.instagram.com/gamitup" target="_blank"><i className="flaticon-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
    )
}

export default Footer
