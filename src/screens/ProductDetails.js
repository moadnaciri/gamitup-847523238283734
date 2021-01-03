import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct, saveProductReview } from '../actions/productActions';
import Rating from '../components/Rating';
import { PRODUCT_REVIEW_SAVE_RESET } from '../constants/productConstants';
import Header2 from '../components/Header2'
import Categories from '../Data/Categories';


function ProductDetails(props) {
  const { id } = useParams()
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const productReviewSave = useSelector((state) => state.productReviewSave);
  const { success: productSaveSuccess } = productReviewSave;
  const dispatch = useDispatch();
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (productSaveSuccess) {
      alert('Review submitted successfully.');
      setRating(0);
      setComment('');
      dispatch({ type: PRODUCT_REVIEW_SAVE_RESET });
    }
    dispatch(detailsProduct(id));
    
    return () => {
      //
    };
  }, [productSaveSuccess]);

  useEffect(() => {
    if(product) {
      Categories.map((c) => {
        if(c.id === product.category) {
          setTitle(c.title)
        }
      })
      
    }
    return () => {
      //
    }
  }, [product])

  
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch actions
    dispatch(
      saveProductReview(props.match.params.id, {
        name: userInfo.name,
        rating: rating,
        comment: comment,
      })
    );
  };
  const handleAddToCart = () => {
    props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
  };

  function returnHtml(i) {
    return i
  }
    return (
        <>
        <Header2 />
        
          <>
  
  {/*============= breadcrumb start here ===============*/}
  <div className="breadcrumb-area shop-area-breadcrumb">
    <div className="nav-container">
      <div className="row">
        <div className="col-lg-4" />
        <div className="col-lg-8">
          <div className="breadcrumb-inner dark-blue">
            <h2 className="page-title">{product?.name}</h2>
            <ul className="page-list">
              <li><Link to="/">Home</Link></li>
              <li className="current">{title}</li>
            </ul>{/* .breadcrumbs */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*============= breadcrumb end here ===============*/}
  {/*============= products  details area start  ===============*/}
  <section className="single-products padding-top-125 md-pd-top-80">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="product-slider-wrapper">
            <div className="slider-part">
              <div className="single-thumbnail-slider">
                <div className="slider-item">
                  <img src={product?.image1} alt="product-single-i" />
                </div>
                <div className="slider-item">
                  <img src={product?.image2} alt="product-single-i" />
                </div>
                <div className="slider-item">
                  <img src={product?.image3} alt="product-single-i" />
                </div>
                <div className="slider-item">
                  <img src={product?.image4} alt="product-single-i" />
                </div>
              </div>
            </div>
            <div className="content-part">
              <div className="description-content">
                <h3 className="title">{product?.name}</h3>
                <div className="star-ratings checked">
                  <i className="flaticon-star " />
                  <i className="flaticon-star " />
                  <i className="flaticon-star " />
                  <i className="flaticon-star " />
                  <i className="flaticon-star " />
                </div>
              </div>
              <div className="price-box">
                <p className="price">
                  <span className="sale-price large-size">Price : ${product?.price}</span>
                </p>
                <p className="price">
                  <span className="sale-price large-size">Category : {title}</span>
                </p>
                <p className="price">
                  <span className="sale-price large-size">Status : {product?.countInStock > 0 ? 'In Stock' : 'Unavailable.'}</span>
                </p>
              </div>
              
              <div className="cart-wrap">
                <li className="quantity-count" style={{ padding: '0 10px' }}>
                  {/*<li className="decrease"> - </li>
                  <li className="quantity">
                    <input type="text" defaultValue={1} />
                    
                  </li>
                  <li className="increase"> + </li>*/}
                  Qty: {' '}
                  <select
                  className="quantity"
                    value={qty}
                    onChange={(e) => {
                      setQty(e.target.value);
                    }}
                  >
                    {[...Array(product?.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </li>
                <div className="btn-wrapper">
                  {product?.countInStock > 0 && (
                  <button type="submit" className="boxed-btn" data-toggle="modal" onClick={handleAddToCart}> Add to cart</button>)}
                </div>
              </div>
              {/*<div className="product-meta padding-top-30">
                
                <div className="product-share">
                  <h5>Share :</h5>
                  <div className="follow-icon">


                    
                    <a href="#" target="_blank"><i className="flaticon-twitter" /></a>
                    <a href="#" target="_blank"><i className="flaticon-instagram" /></a>
                    <a href="#" target="_blank"><i className="flaticon-linked-in-logo-of-two-letters" /></a>
                    <a href="#" target="_blank"><i className="flaticon-facebook-logo" /></a>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="product-thumbnail-carousel padding-top-30">
            <div className="single-thumbnail-item">
              <img src={product?.image2} alt="thumbnail" />
            </div>
            <div className="single-thumbnail-item">
              <img src={product?.image3} alt="thumbnail" />
            </div>
            <div className="single-thumbnail-item">
              <img src={product?.image4} alt="thumbnail" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*============= products  details area end here ===============*/}
  {/*============= Product review section start here ===============*/}
  <section className="product-description-with-review padding-top-125 md-pd-top-80 ">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="product-information">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active show" id="descr-tab" data-toggle="tab" href="#descr" role="tab" aria-controls="descr" aria-selected="true">Description</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade active show" id="descr" role="tabpanel" aria-labelledby="descr-tab">
                <div className="description-tab-content">
                  {returnHtml(product?.description)}
                </div>
              </div>
              <div className="tab-pane fade reviews" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                <h4 className="title">Reviews</h4>
                {!product?.reviews.length && <div>There is no review</div>}
                {product?.reviews.map((review) => (
                <div key={review._id} className="comment-text">
                  <div className="review-content">
                    <div className="img-part">
                      <img alt="thumbnail" src="assets/img/team/team1.png" />
                    </div>
                    <div className="info-part">
                      <div className="star-ratings checked">
                        <i className="flaticon-star " />
                        <i className="flaticon-star " />
                        <i className="flaticon-star " />
                        <i className="flaticon-star " />
                        <i className="flaticon-star " />
                      </div>
                      <h5>{review.name}</h5>
                      <span><Rating value={review.rating}></Rating></span>
                    </div>
                  </div>
                  <div className="review-date">
                    <span className="date">{review.createdAt.substring(0, 10)}</span>
                  </div>
                  <div className="review-description">
                    <p>{review.comment}</p>
                  </div>
                </div>
              ))}
                
                <h5 className="title padding-top-5">Leave a Review</h5>
                {userInfo ? (
                  <form onSubmit={submitHandler} className="review-form padding-top-40">
                  {/*<div className="form-group">
                    <input type="text" className="form-control" placeholder="Fast Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>*/}
                  <div className="form-group">
                      <label htmlFor="rating">Rating</label>
                      <select
                        name="rating"
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value="1">1- Poor</option>
                        <option value="2">2- Fair</option>
                        <option value="3">3- Good</option>
                        <option value="4">4- Very Good</option>
                        <option value="5">5- Excelent</option>
                      </select>
                    
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" rows={4} placeholder="Your Review" defaultValue={""}  name="comment"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)} />
                  </div>
                  <div className="btn-wrapper">
                    <button className="boxed-btn btn-rounded hover-active" type="submit">
                      Submit</button>
                  </div>
                </form>
                ) : (
                  <div>
                    Please <Link to="/signin">Sign-in</Link> to write a review.
                  </div>
                )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*============= Product review section end here ===============*/}
  {/*============= Realted products area start here  ===============*/}
  {/*<section className="related-products-area padding-top-110 md-pd-top-65  padding-bottom-85 md-pd-bottom-45">
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="section-title text-left">
            <h2 className="title">Product Related</h2>
          </div>
        </div>
      </div>
      <div className="row padding-top-5">
        <div className=" col-lg-4 col-md-4 col-sm-6 col-12">
          <div className="product-single-item">
            <div className="product-img">
              <img alt="thumbnail" src="assets/img/shop-details/s1.png" />
              
            </div>
            <div className="single-product-description">
              <h5 className="title"><a href="product-details.html">Aloe Vera Flesh Leaf</a></h5>
              <div className="star-ratings checked">
                <i className="flaticon-star " />
                <i className="flaticon-star " />
                <i className="flaticon-star " />
                <i className="flaticon-star " />
                <i className="flaticon-star " />
              </div>
              <div className="price-box">
                <h5 className="price">
                  <span className="sale-price">$130.00</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-lg-4 col-md-4 col-sm-6 col-12">
          <div className="product-single-item">
            <div className="product-img">
              <img alt="thumbnail" src="assets/img/shop-details/s2.png" />
            </div>
            <div className="single-product-description">
              <h5 className="title"><a href="product-details.html">Out of Stock Product</a></h5>
              <div className="star-ratings checked">
                <i className="flaticon-star " />
                <i className="flaticon-star " />
                <i className="flaticon-star " />
                <i className="flaticon-star " />
                <i className="flaticon-star " />
              </div>
              <div className="price-box">
                <h5 className="price">
                  <span className="sale-price">$120.00</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-lg-4 col-md-4 col-sm-6 col-12 ">
          <div className="product-single-item">
            <div className="product-img">
              <img alt="thumbnail" src="assets/img/shop-details/s3.png" />
            </div>
            <div className="single-product-description">
              <h5 className="title"><a href="product-details.html">Aloe Vera Flesh Leaf</a></h5>
              <div className="star-ratings checked">
                <i className="flaticon-star " />
                <i className="flaticon-star " />
                <i className="flaticon-star " />
                <i className="flaticon-star " />
                <i className="flaticon-star " />
              </div>
              <div className="price-box">
                <h5 className="price">
                  <span className="sale-price">$50.00</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
*/}  {/**/}
  {/*============= Realted   products area end here  ===============*/}
</>

        </>
    )
}

export default ProductDetails
