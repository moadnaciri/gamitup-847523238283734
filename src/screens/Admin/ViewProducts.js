import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  saveProduct,
  listProducts,
  deleteProdcut,
} from '../../actions/productActions';
import AdminHeader from './AdminHeader';

function ViewProducts(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listProducts());
    return () => {
      //
    };
  }, [successSave, successDelete]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setImage(product.image);
    setBrand(product.brand);
    setCategory(product.category);
    setCountInStock(product.countInStock);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        _id: id,
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description,
      })
    );
  };
  const deleteHandler = (product) => {
    dispatch(deleteProdcut(product._id));
  };
  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setUploading(true);
    axios
      .post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setImage(response.data);
        setUploading(false);
      })
      .catch((err) => {
        //console.log(err);
        setUploading(false);
      });
  };
  return (
        <>
            <AdminHeader />
            <div className="form-container">
      {modalVisible && (
          <form className="login-form" onSubmit={submitHandler}>
          <h2 className="title margin-bottom-35">Create Product</h2>

            <div className="form-group">
              {loadingSave && <div>Loading...</div>}
                {errorSave && <div>{errorSave}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input className="form-control" type="text"
                  name="name"
                  value={name}
                  id="name"
                  onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input className="form-control" type="text"
                  name="price"
                  value={price}
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input className="form-control" type="text"
                  name="image"
                  value={image}
                  id="image"
                  onChange={(e) => setImage(e.target.value)}/>
                <input type="file" onChange={uploadFileHandler}></input>
                {uploading && <div>Uploading...</div>}
            </div>

            <div className="form-group">
              <label htmlFor="brand">Brand</label>
              <input className="form-control" type="text"
                  name="brand"
                  value={brand}
                  id="brand"
                  onChange={(e) => setBrand(e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="countInStock">CountInStock</label>
              <input className="form-control" type="text"
                  name="countInStock"
                  value={countInStock}
                  id="countInStock"
                  onChange={(e) => setCountInStock(e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="name">Category</label>
              <input className="form-control" type="text"
                  name="category"
                  value={category}
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" name="description"
                  value={description}
                  id="description"
                  onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className="btn-wrapper" style={{ marginBottom: '30px' }}>
              <button className="boxed-btn" type="submit">
                {id ? 'Update' : 'Create'}
              </button>
            </div>

            <div className="btn-wrapper" style={{ marginBottom: '30px' }}>
              <button className="boxed-btn" type="button"
                  onClick={() => setModalVisible(false)}>
                Back
              </button>
            </div>
            











            
          </form>
      )}





























<div className="table-responsive" style={{ borderTop: '1px solid lightgray' }}>
<table style={{ width: '98%', margin: 'auto' }}>
                <thead className="border-bottom">
                  <tr>
                    <th className="product-name" style={{ padding: '5px 10px', borderRight: '1px solid lightgray' }}>ID</th>
                    <th className="product-price" style={{ padding: '5px 10px', borderRight: '1px solid lightgray' }}>DATE</th>
                    <th className="product-value" style={{ padding: '5px 10px', borderRight: '1px solid lightgray' }}>TOTAL</th>
                    <th className="product-total" style={{ padding: '5px 10px', borderRight: '1px solid lightgray' }}>PAID</th>
                    <th className="product-total" style={{ padding: '5px 10px', borderRight: '1px solid lightgray' }}>ACTIONS</th>
                    <th className="product-total" style={{ padding: '5px 10px' }}/>
                  </tr>
                </thead>
                <tbody className="border-bottom">
                  {products === 0 ?
            <div>
              empty
          </div>
            :
            products.map((product) => <tr>
                    <td className="product-name" key={product._id} style={{ borderRight: '1px solid lightgray' }}>
                      <div className="product-content">
                        <p className="title" style={{ padding: '5px 10px' }}>{product._id}</p>
                      </div>
                    </td>
                    <td className="product-name" style={{ borderRight: '1px solid lightgray' }}>
                      <div className="product-content">
                        <p className="title" style={{ padding: '5px 10px' }}>{product.name}</p>
                      </div>
                    </td>
                    <td className="product-name" style={{ borderRight: '1px solid lightgray' }}>
                      <div className="product-content">
                        <p className="title" style={{ padding: '5px 10px' }}>{product.price}</p>
                      </div>
                    </td>
                    <td className="product-name" style={{ borderRight: '1px solid lightgray' }}>
                      <div className="product-content">
                        <p className="title" style={{ padding: '5px 10px' }}>{product.category}</p>
                      </div>
                    </td>
                    <td className="product-name" style={{ borderRight: '1px solid lightgray' }}>
                      <div className="product-content">
                        <p className="title" style={{ padding: '5px 10px' }}>{product.brand}</p>
                      </div>
                    </td>
                    <td className="product-name" >
                      <div className="product-content">
                        <p className="title" style={{ padding: '5px 10px' }}>
                          <button style={{ padding: '5px 10px', border: '1px solid lightgray' }} onClick={() => openModal(product)}>Edit</button>
                          </p>
                        
                      </div>
                      <div className="product-content">
                        <p className="title" style={{ padding: '5px 10px' }}>
                          <button style={{ padding: '5px 10px', border: '1px solid lightgray' }} onClick={() => deleteHandler(product)}>Delete</button>
                          </p>
                        
                      </div>
                    </td>
                    
                  </tr>
                  )}
                </tbody>
              </table></div>









       {/* <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <button className="button" onClick={() => openModal(product)}>
                    Edit
                  </button>{' '}
                  <button
                    className="button"
                    c
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>



*/}



























      </div>  
        </>
    )
}

export default ViewProducts
