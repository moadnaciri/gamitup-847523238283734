import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header2 from '../components/Header2'
import Categories from '../Data/Categories'
import { listProducts } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../components/Rating';
import { addToCart } from '../actions/cartActions';


function ProductsPage(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [productId, setProductId] = useState('');
  //const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  const { category } = useParams()
  const [title, setTitle] = useState('')
  const [parent_title, setParent_title] = useState('')
  useEffect(() => {
    if(category) {
      Categories.map((c) => {
        if(c.id === category) {
          setTitle(c.title)
          setParent_title(c.parent_title)
        }
      })
      
    }
  }, [])


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
  const handleAddToCart = () => {
    //e.preventDefault();
    //dispatch(addToCart(productId, 1));
  };
  return (
        <> 
        <Header2 />
        
  {/*============= breadcrumb start here ===============*/}
  <div className="breadcrumb-area shop-area-breadcrumb">
    <div className="nav-container">
      <div className="row">
        <div className="col-lg-4" />
        <div className="col-lg-8">
          <div className="breadcrumb-inner dark-blue">
            <h2 className="page-title">{title}</h2>
            <ul className="page-list">
              <li><a href="index.html">Home</a></li>
              <li className="current">{parent_title}</li>
            </ul>{/* .breadcrumbs */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*============= shop area start here ===============*/}
  <section className="shop-area padding-top-120 md-pd-top-80 padding-bottom-85 md-pd-bottom-80">
    <div className="nav-container">
      <div className="row">
        <div className="col-lg-8" style={{ width: '100%', margin: 'auto' }}>
          <div className="row" style={{ width: '100%' }}>

            <div className="col-lg-12 margin-bottom-30">
              <div className="product-sorting">
                <div className="sorting-title" style={{ margin: 'auto' }}>
                  <h1 className="title">{title}</h1>
                </div>
              </div>
              
            </div>
            <div className="col-lg-12 margin-bottom-30">
              <div className="product-sorting">
                <div className="sorting-title">
                  <h5 className="title">Sort by latest :</h5></div>
                <div className="select-option">
                  <select>
                    <option data-display="Sort by lates" value={1}>Sort by lates</option>
                    <option value={2}>Sort by Names</option>
                    <option value={3}>Sort by Sell</option>
                    <option value={4}>Sort by reviews</option>
                  </select>
                </div>
              </div>
              
            </div>
          </div>
          <div className="row">
            {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          {products.map((product, i) => (
          <div key={i}>
            {/*<li key={product._id}>
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
              
            </li>*/}
            <div key={product._id} className="col-md-4 col-sm-6 col-12">
              <div className="product-single-item">
                <div className="product-img">
                  <img src={product.image1} />
                  <div className="overlay">
                    <ul>
                      <li>
                        <a href="#"><i className="flaticon-shopping-cart" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="flaticon-eye" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-product-description">
                  <h5 className="title"><Link to={`./product/${product._id}`}>{product.name}</Link></h5>
                  <div className="star-ratings ">
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
            </div></div>
          ))}
          
           </>
           
      )

}
            
          </div>
        </div>
        {/* sidebar_widget started here */}
              
      </div>
    </div>
  </section>

        </>
    )
}

export default ProductsPage
