import React from 'react'
import { Link } from 'react-router-dom'
import Header2 from '../components/Header2'

function AboutUs() {
    return (
        <>
        <Header2 />
            <div>
  {/*============= breadcrumb start here ===============*/}
  <div className="breadcrumb-area about-area-breadcrumb">
    <div className="nav-container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-inner no-bg">
            <h2 className="page-title">About Us</h2>
            <ul className="page-list">
              <li><Link to="/">Home</Link></li>
              <li className="current">About Us</li>
            </ul>{/* .breadcrumbs */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*============= breadcrumb end here ===============*/}
  {/*============= About Us start here ===============*/}
  <div className="about-us-area style-3 padding-top-110  md-pd-top-80">
    <div className="nav-container">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center">
          <div className="img-wrap">
            <img src="assets/img/about/shape.png" />
            <div className="video-part">
              <div className="pulse-icon">
                <a href="https://www.youtube.com/watch?v=D8BN2YSyYkg" className="video-popup mfp-iframe" tabIndex={0}>
                  <i className="flaticon-play-arrow" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 md-pd-top-45 text-center text-lg-left">
          <div className="content-wrapper">
            <div className="text-wrapper">
              <div className="section-title text-center text-lg-left margin-bottom-55 md-mr-bottom-30">
                <h2 className="title">Our Story</h2>
              </div>
              <p>Jozicular Oncology is developing tumor-specific cancer immunotherapies to fight multiple
                cancer types. Jozicular approach seeks to generate a therapeutic immune response by
                leveraging insights into the immune system’s ability to recognize and destroy tumor
                cells by targeting tumor-specific neoantigens. We believe that activating and directing
                the immune system to these tumor targets could offer an important opportunity to extend
                the benefits of immunotherapy for patients with cancer. To learn more about Jozicular
                approach, please view the video below. <br /> <br /> There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even slightly believable. If you
                are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                embarrassing hidden in the middle of text. <br /> <br /> All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary, making this the first true
                generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                non-characteristic words etc.
              </p>
            </div>
            <div className="btn-wrapper">
              <a href="#" className="boxed-btn">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*============= About Us end here ===============*/}
  {/*============= counterup area start here ===============*/}
  <section className="counterup-area padding-top-125 md-pd-top-80">
    <div className="nav-container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-6">
          <div className="single-counter-item">
            <div className="count-icon"><i className="icon-doctor-1" /></div>
            <p className="count-num plus">100,000</p>
            <h5 className="title">Employees in 100 country
            </h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6">
          <div className="single-counter-item">
            <div className="count-icon  "><i className="icon-investor-1" /></div>
            <p className="count-num">5,894</p>
            <h5 className="title">Invested In R&amp;D in 2018
            </h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6">
          <div className="single-counter-item">
            <div className="count-icon"><i className="icon-progress-report " /></div>
            <p className="count-num">84</p>
            <h5 className="title">Project in clinical development
            </h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6">
          <div className="single-counter-item">
            <div className="count-icon"><i className="icon-Group-604" /></div>
            <p className="count-num">33</p>
            <h5 className="title">Industrial site in countries
            </h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*============= counterup area end  ===============*/}
  {/*============= Meet team area start here ===============*/}
  <section className="meet-team-area style-2 padding-top-75 md-pd-top-35">
    <div className="nav-container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title margin-bottom-60  md-mr-bottom-35">
            <h2 className="title">Meet Our Leadership</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="team-slider row">
            <div className="team-item col-12">
              <div className="img-warpper ">
                <img src="assets/img/team/team1.png" className="border-left-top" />
                <div className="overlay border-left-top">
                  <div className="icon-wrap">
                    <a href="https://www.facebook.com/codingeek.net" target="_blank"><i className="flaticon-facebook-logo" /></a>
                    <a href="https://twitter.com/codingeeknet" target="_blank"><i className="flaticon-twitter" /></a>
                    <a href="https://www.linkedin.com/company/codingeek" target="_blank"><i className="flaticon-linked-in-logo-of-two-letters" /></a>
                    <a href="https://www.instagram.com/codingeeknet/" target="_blank"><i className="flaticon-instagram" /></a>
                  </div>
                </div>
              </div>
              <h5 className="title">Karin Jooss, Ph.D.</h5>
              <p>Executive Vice President and Chief Business Officer</p>
            </div>
            <div className="team-item col-12">
              <div className="img-warpper ">
                <img src="assets/img/team/team2.png" className="border-left-bottom" />
                <div className="overlay border-left-bottom">
                  <div className="icon-wrap">
                    <a href="https://www.facebook.com/codingeek.net" target="_blank"><i className="flaticon-facebook-logo" /></a>
                    <a href="https://twitter.com/codingeeknet" target="_blank"><i className="flaticon-twitter" /></a>
                    <a href="https://www.linkedin.com/company/codingeek" target="_blank"><i className="flaticon-linked-in-logo-of-two-letters" /></a>
                    <a href="https://www.instagram.com/codingeeknet/" target="_blank"><i className="flaticon-instagram" /></a>
                  </div>
                </div>
              </div>
              <h5 className="title">Lusian, Ph.D.</h5>
              <p>Executive Vice President and Chief Business Officer</p>
            </div>
            <div className="team-item col-12">
              <div className="img-warpper ">
                <img src="assets/img/team/team3.png" className="border-right-top" />
                <div className="overlay border-right-top">
                  <div className="icon-wrap">
                    <a href="https://www.facebook.com/codingeek.net" target="_blank"><i className="flaticon-facebook-logo" /></a>
                    <a href="https://twitter.com/codingeeknet" target="_blank"><i className="flaticon-twitter" /></a>
                    <a href="https://www.linkedin.com/company/codingeek" target="_blank"><i className="flaticon-linked-in-logo-of-two-letters" /></a>
                    <a href="https://www.instagram.com/codingeeknet/" target="_blank"><i className="flaticon-instagram" /></a>
                  </div>
                </div>
              </div>
              <h5 className="title">Riban, Ph.D.</h5>
              <p>Executive Vice President and Chief Business Officer</p>
            </div>
            <div className="team-item col-12">
              <div className="img-warpper ">
                <img src="assets/img/team/team4.png" className="border-left-bottom" />
                <div className="overlay border-left-bottom">
                  <div className="icon-wrap">
                    <a href="https://www.facebook.com/codingeek.net" target="_blank"><i className="flaticon-facebook-logo" /></a>
                    <a href="https://twitter.com/codingeeknet" target="_blank"><i className="flaticon-twitter" /></a>
                    <a href="https://www.linkedin.com/company/codingeek" target="_blank"><i className="flaticon-linked-in-logo-of-two-letters" /></a>
                    <a href="https://www.instagram.com/codingeeknet/" target="_blank"><i className="flaticon-instagram" /></a>
                  </div>
                </div>
              </div>
              <h5 className="title">Riban, Ph.D.</h5>
              <p>Executive Vice President and Chief Business Officer</p>
            </div>
            <div className="team-item col-12">
              <div className="img-warpper ">
                <img src="assets/img/team/team5.png" className="border-right-bottom" />
                <div className="overlay border-right-bottom">
                  <div className="icon-wrap">
                    <a href="https://www.facebook.com/codingeek.net" target="_blank"><i className="flaticon-facebook-logo" /></a>
                    <a href="https://twitter.com/codingeeknet" target="_blank"><i className="flaticon-twitter" /></a>
                    <a href="https://www.linkedin.com/company/codingeek" target="_blank"><i className="flaticon-linked-in-logo-of-two-letters" /></a>
                    <a href="https://www.instagram.com/codingeeknet/" target="_blank"><i className="flaticon-instagram" /></a>
                  </div>
                </div>
              </div>
              <h5 className="title">jein Jery, Ph.D.</h5>
              <p>Executive Vice President and Chief Business Officer</p>
            </div>
            <div className="team-item col-12">
              <div className="img-warpper ">
                <img src="assets/img/team/team6.png" className="border-left-bottom" />
                <div className="overlay border-left-bottom">
                  <div className="icon-wrap">
                    <a href="https://www.facebook.com/codingeek.net" target="_blank"><i className="flaticon-facebook-logo" /></a>
                    <a href="https://twitter.com/codingeeknet" target="_blank"><i className="flaticon-twitter" /></a>
                    <a href="https://www.linkedin.com/company/codingeek" target="_blank"><i className="flaticon-linked-in-logo-of-two-letters" /></a>
                    <a href="https://www.instagram.com/codingeeknet/" target="_blank"><i className="flaticon-instagram" /></a>
                  </div>
                </div>
              </div>
              <h5 className="title">kury ayen, Ph.D.</h5>
              <p>Executive Vice President and Chief Business Officer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*============= Meet team area end here ===============*/}
  {/*============= our vision area start here ===============*/}
  <section className="vision-area text-center text-lg-left padding-top-110 md-pd-top-75">
    <div className="nav-container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title margin-bottom-50 md-mr-bottom-25">
            <h2 className="title">Our Vision</h2>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6 ">
          <div className="img-part">
            <img src="assets/img/about/main-3.png" className="border-left-top" />
            <div className="animated-item style-2">
              <div className="animate-img">
                <img src="assets/img/news/animate.svg" />
              </div>
            </div>
            {/* <div class="animated-item style-2 item-2">
                      <div class="animate-img">
                          <img src="assets/img/news/animate.svg" alt="">
                      </div>

                  </div> */}
          </div>
        </div>
        <div className="col-lg-6 md-mr-top-60">
          <div className="content-part">
            <div className="vision-item">
              <h5 className="title">Jozicular strives to be a "Game Changer"</h5>
              <p>Various versions have evolved over  reader will be distracted by the readable content
                of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters</p>
            </div>
            <div className="vision-item">
              <h5 className="title">Jozicularis a science driven company</h5>
              <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                It is a long established fact that a reader will be distracted by the readable content
                of a page when looking at its layout.</p>
            </div>
            <div className="vision-item">
              <h5 className="title">Jozicular strives to be</h5>
              <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                It is a long established The point of using normal distribution of letters</p>
            </div>
            <div className="animated-item style-2">
              <div className="animate-img small-size">
                <img src="assets/img/news/animate.svg" />
              </div>
            </div>
            <div className="animated-item style-2 item-2">
              <div className="animate-img small-size-2">
                <img src="assets/img/news/animate.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*============= our vision area end here ===============*/}
  {/*============= join-us area start here ===============*/}
  <section className="join-us-area style-2 padding-top-115 md-pd-top-70 padding-bottom-125 md-pd-bottom-80">
    <div className="nav-container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title margin-bottom-50 md-mr-bottom-25">
            <h2 className="title">Join Our Team</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="join-us-content about-area-join">
            <div className="left-bg-2">
              <h3 className="title">We are looking for passionate, <br /> innovative people to join us</h3>
            </div>
            <div className="btn-wrapper">
              <button className="boxed-btn">Join us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*============= join-us area end here ===============*/}
</div>

        </>
    )
}

export default AboutUs
