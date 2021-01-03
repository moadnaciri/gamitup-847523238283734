import React from 'react'
import { Link } from 'react-router-dom'
import Header2 from '../components/Header2'

function ContactPage() {
    return (
        <>
        <Header2 />
           <div>
  {/*============= breadcrumb start here ===============*/}
  <div className="breadcrumb-area contact-area-breadcrumb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-inner dark-blue">
            <h2 className="page-title white-effect">Contact Us</h2>
            <ul className="page-list white-effect">
              <li><Link to="/">Home</Link></li>
              <li className="current">Contact Us</li>
            </ul>{/* .breadcrumbs */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*============= breadcrumb end here ===============*/}
  {/*============= contact-info area start here ===============*/}
  <section className="contact-info-area padding-top-120 md-pd-top-70 margin-bottom-125 md-mr-bottom-80">
    <div className="nav-container">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-left margin-bottom-40 md-mr-bottom-20">
                <h2 className="title">Get in Touch</h2>
              </div>
            </div>
          </div>
         {/* <div className="row">
            <div className="col-xl-4 col-lg-12 ">
              <div className="contact-info-box">
                <h5 className="title">New York</h5>
                <p>Collins Street West 8007, San Fransico, United States.</p>
                <p><strong>Email: </strong>Jozicular@gmail.com</p>
                <p><strong>Phone: </strong>+(880) 101 8990 566</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 mt-3 mt-xl-0">
              <div className="contact-info-box">
                <h5 className="title">London</h5>
                <p>Houghton Street, Suite 721 London 10010</p>
                <p><strong>Email: </strong>lifeomic2@gmail.com</p>
                <p><strong>Phone: </strong>+(880) 101 8990 566</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 mt-3 mt-xl-0">
              <div className="contact-info-box">
                <h5 className="title">San Francisco</h5>
                <p>2130 Fulton Street San Francisco, CA 9411</p>
                <p><strong>Email: </strong>lifeomic3@gmail.com</p>
                <p><strong>Phone: </strong>+(880) 101 8990 566</p>
              </div>
            </div>
          </div>*/}
          <div className="row padding-top-45">
            <div className="col-lg-4 col-sm-4">
              <div className="img-wrap text-center text-sm-left">
                <img src="assets/img/contact/bf.png" />
              </div>
            </div>
            <div className="col-lg-8 col-sm-8 mt-5 mt-sm-0">
              <div className="footer-widget align-items-center">
                <h5 className="widget-title">Follow Us</h5>
                <div className="footer-icon">
                  <a href="https://www.facebook.com/Gamitup-101438528557374" target="_blank"><i className="flaticon-facebook-logo" /></a>
                  {/*<a href="https://twitter.com/codingeeknet" target="_blank"><i className="flaticon-twitter" /></a>
                  <a href="https://www.linkedin.com/company/codingeek" target="_blank"><i className="flaticon-linked-in-logo-of-two-letters" /></a>*/}
                  <a href="https://www.instagram.com/gamitup" target="_blank"><i className="flaticon-instagram" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 border-left pt-5 pt-lg-0">
          <div className="section-title text-left margin-bottom-60 md-mr-bottom-35">
            <h2 className="title">Send your Message</h2>
          </div>
          <form className="contact-from style-2" id="contact-form" action="mail.php" method="post">
            <div className="form-group">
              <input type="text" name="name" className="form-control" placeholder="Fast Name" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <input type="email" name="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" rows={4} placeholder="Comment" defaultValue={""} />
            </div>
            <div className="btn-wrapper">
              <button type="submit" className="submit-btn boxed-btn"><span>Send Message</span></button>
            </div>
            <p className="form-messege mb-0" />
          </form>
        </div>
      </div>
    </div>
  </section>
  {/*============= contact-info area end here ===============*/}
  {/*============= map area start here ===============*/}
  {/*<div className="map-area">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.091203408827!2d90.4234868154319!3d23.779766393569787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7499f257eab%3A0xe6b4b9eacea70f4a!2sManama%20Tower!5e0!3m2!1sbn!2sbd!4v1574161192392!5m2!1sbn!2sbd" width={1920} height={400} style={{border: 0}} allowFullScreen />
  </div>*/}
  {/*============= map area end here ===============*/}
</div>

        </>
    )
}

export default ContactPage
