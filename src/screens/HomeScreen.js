import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
//import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import Header from '../components/Header';
import BestSellingProducts from '../Data/HomeProductsData.js';
import NewProducts from '../Data/HomeNewProducts.js';
import { addToCart } from '../actions/cartActions';

//import Rating from '../components/Rating';
//import VideoSection from '../components/VideoSection';

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  return (
    <>
    <Header />
    {/*
      {category && <h2>{category}</h2>}

      <ul className="filter">
        <li>
          <form onSubmit={submitHandler}>
            <input
              name="searchKeyword"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </li>
        <li>
          Sort By{' '}
          <select name="sortOrder" onChange={sortHandler}>
            <option value="">Newest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </li>
      </ul>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ul className="products">
          {products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <Link to={'/product/' + product._id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                </Link>
                <div className="product-name">
                  <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">
                  <Rating
                    value={product.rating}
                    text={product.numReviews + ' reviews'}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )

*/}


<div>
  {/*============= Banner Section start here ===============*/}
  <section className="showcase-4-area">
    {/* <div class="showcase4-overlay-"></div> */}
    <div className="showcase4-main">
      <div className="content-part">
        <div className="showcase4-slider">
          <div className="showcase4-slider-item">
            <div className="showcase4-slider-item-inner bg-image" data-bg="assets/img/home4-slider/slider-4-1.jpg">
              <div className="nav-container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-8 text-center text-lg-left">
                    <div className="slider-content-wrap">
                      <div className="slider-content-wrap-inner">
                        <h2 className="title">YOUR SETUP AT YOUR COMMAND</h2>
                        <p>Discover Our Crucial gaming selection</p>
                        <div className="btn-wrapper">
                          <a href="#about-us" className="boxed-btn">About us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="showcase4-slider-item">
            <div className="showcase4-slider-item-inner bg-image" data-bg="assets/img/home4-slider/slider-4-2.jpg">
              <div className="nav-container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-8 text-center text-lg-left">
                    <div className="slider-content-wrap">
                      <div className="slider-content-wrap-inner">
                        <h2 className="title">Trending products</h2>
                        <p>Buy bestselling gaming products, electronics, and other accessories for cheaper prices in the best deals on the planet.</p>
                        <div className="btn-wrapper">
                          <a href="#trending" className="boxed-btn">Check it out</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="showcase4-slider-item">
            <div className="showcase4-slider-item-inner bg-image" data-bg="assets/img/home4-slider/slider-4-3.jpg">
              <div className="nav-container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-8 text-center text-lg-left">
                    <div className="slider-content-wrap">
                      <div className="slider-content-wrap-inner">
                        <h2 className="title">Cheap products</h2>
                        <p>Are you low on cash or just want to score a great bargain? GAMITUP offers a selection of great gaming products that can be bought for a whole lot less, even under one dollar!</p>
                        <div className="btn-wrapper">
                          <a href="#contact-us" className="boxed-btn">Contact us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<div className="showcase4-slider-item">
            <div className="showcase4-slider-item-inner bg-image" data-bg="assets/img/home4-slider/slider-4-1.jpg">
              <div className="nav-container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-8 text-center text-lg-left">
                    <div className="slider-content-wrap">
                      <div className="slider-content-wrap-inner">
                        <h2 className="title">Enhancing Lives with transformation</h2>
                        <p>Jozicular is pioneering a new class of immunotherapy to give hope to patients and their family Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="btn-wrapper">
                          <a href="#" className="boxed-btn">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="showcase4-slider-item">
            <div className="showcase4-slider-item-inner bg-image" data-bg="assets/img/home4-slider/slider-4-2.jpg">
              <div className="nav-container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-8 text-center text-lg-left">
                    <div className="slider-content-wrap">
                      <div className="slider-content-wrap-inner">
                        <h2 className="title">Humanitarian  Help Programs</h2>
                        <p>Jozicular is pioneering a new class of immunotherapy to give hope to patients and their family Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="btn-wrapper">
                          <a href="#" className="boxed-btn">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
 */}       </div>
      </div>
    </div>
    <div className="showcase-slider-dot-controls">
    </div>
    <div className="showcase-follow-icon left-align">
      <a href="https://www.instagram.com/gamitup" target="_blank"><i className="flaticon-twitter" /></a>
      {/*<a href="https://www.instagram.com/codingeeknet/" target="_blank"><i className="flaticon-instagram" /></a>
      <a href="https://www.linkedin.com/company/codingeek" target="_blank"><i className="flaticon-linked-in-logo-of-two-letters" /></a>*/}
      <a href="https://web.facebook.com/Gamitup-101438528557374" target="_blank"><i className="flaticon-facebook-logo" /></a>
    </div>
  </section>
  {/*============= Banner Section end here ===============*/}



  {/*============= our News area start here ===============*/}
  <section className="tab-area padding-top-110 md-pd-top-80 " id='trending'>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title margin-bottom-55 md-mr-bottom-50">
            <h2 className="title">BEST SELLING PRODUCTS</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="news-filter home4-news-filter">
            {/*<div className="button-group filters-button-group margin-bottom-55 md-mr-bottom-25">
              <button className="button  is-checked" data-filter="*">All</button>
              <button className="button" data-filter=".media">Media</button>
              <button className="button" data-filter=".news">News</button>
              <button className="button" data-filter=".event">Event</button>
              <button className="button" data-filter=".publications">Publications</button>
            </div>*/}
            <div className="grid row">
              {BestSellingProducts.map((product,i) => (
                <div key={i} className="element-item col-md-6 event publications  ">
                <div className="news-item style-3" style={{ border: '1px solid lightblue', borderRadius: '5px' }}>
                  <div className="img-warpper ">
                    <Link to={`./product/${product._id}`}>
                    <img style={{ width: '525px', marginTop: '10px' }} src={product.image} />

                    </Link>
                    {/*<div className="overlay">
                      <div className="icon-wrap">
                        <Link to={`./product/${product._id}`} className="image-popup"> <i className="flaticon-full-screen" /></Link>
                      </div>
                    </div>*/}
                  </div>
                  <div className="content-wrap">
                    <div className="date-with-writter">
                      
                      <p><strong>from </strong>{product.brand}</p>
                    </div>
                    {/*<div className="date-with-writter">
                      <p className="published-date"><strong>Published : </strong> 5 September 2019
                      </p>
                      <p><strong>By </strong> kalapian moi</p>
                    </div>
                    <ul className="post-meta">
                      <li><a href="#"><i className="flaticon-black-bubble-speech" /> Comment</a>
                      </li>
                      <li><a href="#"><i className="flaticon-eye" /> 230 View</a></li>
                    </ul>*/}
                    <h5 className="title">
                      <Link to={`./product/${product._id}`}>{product.name}</Link>
                    </h5>
                    {/*<p>
                        {product.shortDescription}
                    </p>*/}
                    <div className="star-ratings checked">
                    <i className="flaticon-star " />
                    <i className="flaticon-star " />
                    <i className="flaticon-star " />
                    <i className="flaticon-star " />
                    <i className="flaticon-star " />
                  </div>
              <div className="price-box">
                    <h5 className="price">
                      <span className="sale-price">${product.price}</span>
                    </h5>
                  </div>
                    <div className="btn-wrapper">
                      <button onClick={() => dispatch(addToCart(product._id, 1))} className="boxed-btn">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              ))}
              

              </div>
            <div className="animated-item style-2">
              <div className="animate-img">
                <img src="assets/img/news/animate.svg" />
              </div>
            </div>
            <div className="animated-item style-2 item-2">
              <div className="animate-img">
                <img src="assets/img/news/animate.svg" />
              </div>
            </div>
            <div className="animated-item style-2 item-3">
              <div className="animate-img">
                <img src="assets/img/news/animate.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*============= our News area end here ===============*/}










{/*============= Meet team area start here ===============*/}
  <section className="meet-team-area style-2 padding-top-110 md-pd-top-65 margin-bottom-55" id='new-products'>
    <div className="nav-container rel-cls">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title margin-bottom-60 md-mr-bottom-50">
            <h2 className="title">CHECK OUT OUR NEWS</h2>
          </div>
        </div>
      </div>
      <div className="row">
        
          <div className="col-lg-12">
          <div className="team-slider-2 row">
            {products.map((product, i) => (
              
            <div key={i} className="team-item col-12" >

              <div className="img-warpper ">
                <img  src={product.image1} className="border-left-top" style={{ width: '500px' }}/>
                {/*<div className="overlay border-left-top">
                  <div className="icon-wrap">
                   
                        <a href="#"><i className="flaticon-shopping-cart" /></a>
                      
                        <a href="#"><i className="flaticon-eye" /></a>
                     
                  </div>
                </div>*/}
              </div>
              <h5 className="title"><Link to={`./product/${product._id}`}>{product.name}</Link></h5>
              <div className="star-ratings checked">
                    <i className="flaticon-star " />
                    <i className="flaticon-star " />
                    <i className="flaticon-star " />
                    <i className="flaticon-star " />
                    <i className="flaticon-star " />
                  </div>
              <div className="price-box">
                    <h5 className="price">
                      <span className="sale-price">${product.price}</span>
                    </h5>
                  </div>
                <div className="btn-wrapper">
                      <button onClick={() => dispatch(addToCart(product._id, 1))} className="boxed-btn">Add to Cart</button>
                    </div>
            </div>))}
          </div>
        </div>

        
      </div>
      <div className="meet-team-slider-controls" />
    </div>
  </section>
  {/*============= Meet team area end here ===============*/}    
  
  
  {/*============= client area start here ===============*/}
 {/* <div className="client-area padding-top-90 md-pd-top-50 padding-bottom-125 md-pd-bottom-80">
    <div className="nav-container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title margin-bottom-60 md-mr-bottom-35">
            <h2 className="title">Featured Brands</h2>
          </div>
        </div>
      </div>
      <div className="client-slider row" style={{ alignItems: 'center' }}>
        <div className="col-4" style={{ margin: 'auto' }}>
          <div className="client-item" style={{ margin: 'auto' }}>
            <a href="#"><img src="assets/img/featured-brands/twitch.png" style={{ margin: 'auto' }} /></a>
          </div>
        </div>
        <div className="col-4">
          <div className="client-item">
            <a href="#"><img src="assets/img/featured-brands/PS5.png" /></a>
          </div>
        </div>
        <div className="col-4">
          <div className="client-item">
            <a href="#"><img src="assets/img/featured-brands/PG.png" /></a>
          </div>
        </div>
        <div className="col-4">
          <div className="client-item">
            <a href="#"><img src="assets/img/featured-brands/Oversteel.png" /></a>
          </div>
        </div>
        <div className="col-4">
          <div className="client-item">
            <a href="#"> <img src="assets/img/featured-brands/Garmin.png" /></a>
          </div>
        </div>
        <div className="col-4">
          <div className="client-item">
            <a href="#"><img src="assets/img/featured-brands/CORSAIR.png" /></a>
          </div>
        </div>
        <div className="col-4">
          <div className="client-item">
            <a href="#"><img src="assets/img/featured-brands/XboxSeriesX.png" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>*/}
  {/*============= client area end here ===============*/}





{/*============= Technologies area start here ===============*/}
  <section className="Technologies-area padding-top-110 md-pd-top-70">
    <div className="nav-container">
      <div className="row align-items-center">
        <div className="col-lg-6 order-2 order-lg-1 md-pd-top-20">
          <div className="animated-image-area text-center text-lg-left">
            <div className="main-img">
              <img src="assets/img/technology/main-bg.png" />
            </div>
            <div className="animated-img-box">
              <div className="img-wrap">
                <img src="assets/img/technology/main1.png" />
              </div>
              <p> <strong>Xbox</strong> </p>
            </div>
            <div className="animated-img-box item-2">
              <div className="img-wrap">
                <img src="assets/img/technology/main2.png" />
              </div>
              <p> <strong>Nintendo</strong> </p>
            </div>
            <div className="animated-img-box item-3">
              <div className="img-wrap">
                <img src="assets/img/technology/main3.png" />
              </div>
              <p> <strong>Playstation</strong> </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 text-center text-lg-left">
          <div className="content-wrapper">
            <div className="text-wrapper">
              <div className="section-title text-center text-lg-left margin-bottom-55 md-mr-bottom-30">
                <h2 className="title">Gaming and esportstore</h2>
              </div>
              {/*<h5 className="sub-title">We are Developing Life-Changing Therapies Through the Use of Our
                Proprietary Technologies.</h5>*/}
              <p>Welcome to GAMITUP, the store for you that loves gaming and esports. Over the years we have built a wide assortment to fit every type of gamer. Regardless if you are looking for a perfect gaming mouse, accessories to your Nintendo Switch or keycaps to pimp your keyboard, we got what you want. We specialize on products specifically customized for gaming and esports. If you are looking for a new mouse that fits you perfect you should check out our wide assortment of gaming mice. Find out which grip is best suited for you to find that perfect aim. Compliment the mouse with new mouse skates and a ripping mousepad to improve your gaming experience. We have the products to take your game to the next level!</p><p>

By working closely with many distributors and esports organisations across the whole world we are able to offer unique products and competetive prices. We have put in alot of work to find the most sought after products in the business, whether it's a limited edition mouse, a mousepad to support your favorite esports team or new thumbsticks to improve your control. With worldwide delivery, safe payment options and exceptional customer support you never have to feel stressed about shopping at GAMITUP.</p>
            </div>
            <div className="btn-wrapper">
              <Link style={{ textDecoration: 'none' }} to="/e-sports-store" className="boxed-btn">Descover More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*============= Technologies area end here ===============*/}






  {/*============= About Us start here ===============*/}
  <div className="about-us-area style-3 no-bg  padding-top-110 md-pd-top-65" id='about-us'>
    {/*<div className="floating-icon" id="service_info_item">
      <div className="floating-icon__is floating-icon-info">
        <i className="flaticon-telephone-handle-silhouette" />
      </div>
      <div className="floating-icon__is floating-icon-location">
        <i className="flaticon-placeholder" />
      </div>
      <div className="floating-icon__is floating-icon-message">
        <i className="flaticon-envelope" />
      </div>
    </div>*/}
    {/*floating-icon*/}
    <div className="nav-container">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-left">
          <div className="content-wrapper">
            <div className="text-wrapper">
              <div className="section-title text-center text-lg-left margin-bottom-45 md-mr-bottom-20">
                <h2 className="title">About Us</h2>
              </div>
              <p>
                We are the ultimate store for gaming gear as we have chosen to focus on offering the very best on the market in regard to accessories for computers and consoles. We offer products from many manufacturers around the world, whether it be exclusive keyboards or mice, and have an assortment that suits everyone.<br/><br/>

Our web shop is the largest in Scandinavia when it comes to equipment and accessories for gaming and e-sports. Within Sweden's borders, we have a lightning-fast delivery service at 1-3 working days, and orders that are made before 5 pm are shipped out on the very same working day. Our warehouse and headquarters are in Upplands Väsby, north of Stockholm.<br/><br/>

We work with a close relationship with several brands, e-sport organisations, and distributers around the world to be able to offer our customers the best merchandise at the best prices. GAMITUP was founded in 2010. Since then, the company has grown and today we sell tons of gaming products to gamers and e-sport supporters around the globe on a daily basis.<br/><br/>

With us you will always be able to shop safely and should you not be satisfied, we have first-class, competent customer service and support which is often praised for its good reception. They will happily answer both simple and complex questions.
              </p>
            </div>
            {/*<div className="btn-wrapper">
              <a href="#" className="boxed-btn">Read More</a>
            </div>*/}
            <div className="animated-item style-2">
              <div className="animate-img ">
                <img src="assets/img/news/animate.svg" />
              </div>
            </div>
            <div className="animated-item style-2 item-2">
              <div className="animate-img small-size">
                <img src="assets/img/news/animate.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-left   md-pd-top-60">
          <div className="img-wrap">
            <img src="assets/img/about/shape2.png" />
            <div className="video-part">
              <div className="pulse-icon">
                <a href="assets/video/about.mp4" className="video-popup mfp-iframe" tabIndex={0}>
                  <i className="flaticon-play-arrow" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*============= About Us end here ===============*/}
  





  {/*=============Our Pipeline area start here ===============*/}
  {/*<section className="pipeline-area  padding-top-125 md-pd-top-10 sm-pd-top-5">
    <div className="nav-container">
      <div className="row align-items-center text-center text-lg-left">
        <div className="col-lg-6">
          <div className="img-wrap">
            <img src="assets/img/pipeline/main1.png" />
          </div>
        </div>
        <div className="col-lg-6 md-pd-top-50">
          <div className="content-wrapper with-animated-item">
            <div className="text-wrapper">
              <div className="section-title text-center text-lg-left margin-bottom-55 md-mr-bottom-30">
                <h2 className="title">Our Pipeline</h2>
              </div>
              <p>Jozicular Oncology’s scientific founders published an important discovery in
                immuno-oncology: in patients with solid tumors who respond to checkpoint inhibitors,
                mutations in the tumor’s DNA produce critical new targets. These targets, called
                tumor-specific neoantigens.
              </p>
            </div>
            <div className="btn-wrapper">
              <a href="#" className="boxed-btn">Read More</a>
            </div>
            <div className="animated-item">
              <div className="animate-img">
                <img src="assets/img/pipeline/animate.png" />
              </div>
            </div>
            <div className="animated-item item-2">
              <div className="animate-img">
                <img src="assets/img/pipeline/animate.png" />
              </div>
            </div>
            <div className="animated-item item-3">
              <div className="animate-img">
                <img src="assets/img/pipeline/animate.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>*/}
  {/*============= Our Pipeline area end here ===============*/}


  {/*============= join-us area start here ===============*/}
 {/*<section className="join-us-area style-2 padding-top-125 md-pd-top-80">
    <div className="nav-container">
      <div className="row">
        <div className="col-lg-12">
          <div className="join-us-content home-4-join-us-content">
            <div className="left-bg-2">
              <h2 className="title">Join Our Team</h2>
              <p>At Jozicular Oncology, we are committed to progressing the field of immunotherapy, with a goal to eradicate cancer by initially developing personalized immunotherapies that focus on the unique and individual nature of a patient’s tumor.</p>
            </div>
            <div className="btn-wrapper md-pd-top-20">
              <button className="boxed-btn">Join us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>*/}
  {/*============= join-us area end here ===============*/}



  
  
  {/*============= contact area start here ===============*/}
<section className="contact-area-2  padding-top-110 md-pd-top-80 padding-bottom-125 md-pd-bottom-80" id='contact-us'>
  <div className="nav-container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title margin-bottom-50 md-mr-bottom-25">
          <h2 className="title">Contact Us</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="content-wrapper">
          <div className="img-wrap">
          </div>
          <div className="text-wrapper">
            <form className="contact-from">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Fast Name" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group">
                <textarea className="form-control" rows={4} placeholder="Comment" defaultValue={""} />
              </div>
              <div className="btn-wrapper">
                <button type="submit" className="submit-btn boxed-btn"><span>Send
                    Message</span></button>
              </div>
            </form>
            {/*<div className="address-wrap">
              <div className="info-box white-effect">
                <div className="pulse-icon">
                  <i className="flaticon-pin" />
                </div>
                <p>Collins Street West 8007, <br /> San Fransico, United States.</p>
              </div>
              <div className="info-box white-effect">
                <div className="pulse-icon">
                  <i className="flaticon-black-back-closed-envelope-shape" />
                </div>
                <p>Jozicular@gmail.com <br /> Jozicular@gmail.com</p>
              </div>
              <div className="info-box white-effect">
                <div className="pulse-icon">
                  <i className="flaticon-telephone-handle-silhouette" />
                </div>
                <p>+098 769 023 <br /> +098 769 024</p>
              </div>
            </div>*/}
          </div>
          <div className="circle-img">
            <img src="assets/img/contact/circle.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/*============= contact area end here ===============*/}




{/*============= Therapy area start here ===============*/}
  <section className="therapy-box-area padding-top-0 md-pd-top-45">
    <div className="nav-container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title margin-bottom-60 md-mr-bottom-35">
            <h2 className="title">Featured Brands</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="therapy-box">
            <div className="icon-wrap">
              <i>
                <img src="assets/img/featured-brands/twitch.png" />
                </i>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="therapy-box">
            <div className="icon-wrap">
              <i>
                <img src="assets/img/featured-brands/PS5.png" />
                </i>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="therapy-box">
            <div className="icon-wrap">
              <i>
                <img src="assets/img/featured-brands/PG.png" />
                </i>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="therapy-box">
            <div className="icon-wrap">
              <i>
                <img src="assets/img/featured-brands/Oversteel.png" />
                </i>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="therapy-box">
            <div className="icon-wrap">
              <i>
                <img src="assets/img/featured-brands/Garmin.png" />
                </i>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="therapy-box">
            <div className="icon-wrap">
              <i>
                <img src="assets/img/featured-brands/CORSAIR.png" />
                </i>
            </div>
          </div>
        </div>
        {/*<div className="col-lg-3 col-md-6">
          <div className="therapy-box">
            <div className="icon-wrap">
              <i>
                <img src="assets/img/featured-brands/XboxSeriesX.png" />
                </i>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  </section>
  {/*============= Therapy area end here ===============*/}

</div>


    </>
  );
}
export default HomeScreen;
