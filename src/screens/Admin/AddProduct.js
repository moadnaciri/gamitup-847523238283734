import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Categories from '../../Data/Categories'
import axios from 'axios';
import {
  saveProduct,
  listProducts,
  deleteProdcut,
} from '../../actions/productActions';
import AdminHeader from './AdminHeader';

function AddProduct(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [image4, setImage4] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');
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
    setImage1(product.image1);
    setImage2(product.image2);
    setImage3(product.image3);
    setImage4(product.image4);
    setBrand(product.brand);
    setCategory(product.category);
    setColor(product.color);
    setCountInStock(product.countInStock);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        _id: id,
        name,
        price,
        image1,
        image2,
        image3,
        image4,
        brand,
        category,
        color,
        countInStock,
        description,
      })
    );
  };
  const deleteHandler = (product) => {
    dispatch(deleteProdcut(product._id));
  };
  const uploadFileHandler1 = (e) => {
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
        setImage1(response.data);
        setUploading(false);
      })
      .catch((err) => {
        //console.log(err);
        setUploading(false);
      });
  };

  {/*const setimage = async (i) => {
    try {
    await fetch('http://localhost:8080/api/image/upload', {
        method: 'POST',
        body: JSON.stringify({ data: {i} }),
        headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json()).then(githubUser => {
           var image = githubUser.msg.url;
            
        }).catch(error => //console.log(error.message));;
    setSuccessMsg('Image uploaded successfully');
  } catch (err) {
    console.error(err);
    setErrMsg('Something went wrong!');
  }

  return image
  }*/}

  const uploadFileHandler2 = (e) => {
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
        setImage2(response.data);
        setUploading(false);
      })
      .catch((err) => {
        //console.log(err);
        setUploading(false);
      });
  };

  const uploadFileHandler3 = (e) => {
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
        setImage3(response.data);
        setUploading(false);
      })
      .catch((err) => {
        //console.log(err);
        setUploading(false);
      });
  };

  const uploadFileHandler4 = (e) => {
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
        setImage4(response.data);
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
      <h2 className="title margin-bottom-35" style={{ textAlign: 'center' }}>Create Product</h2>
      <div className="btn-wrapper" style={{ marginBottom: '30px', alignItems: 'center' }}>
       
        <button className="boxed-btn" style={{ margin: 'auto' }} onClick={() => openModal({})}>
          Create Product
        </button>
      </div>
      {modalVisible && (
          <form className="login-form" onSubmit={submitHandler}>
          {/*<h2 className="title margin-bottom-35">Create Product</h2>*/}

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
              <input className="form-control" type="number"
                  name="price"
                  value={price}
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="image1">Image 1</label>
              <input className="form-control" type="text"
                  name="image1"
                  value={image1}
                  id="image1"
                  onChange={(e) => setImage1(e.target.value)}/>
                <input type="file" onChange={uploadFileHandler1}></input>
                {uploading && <div>Uploading...</div>}
            </div>

            <div className="form-group">
              <label htmlFor="image2">Image 2</label>
              <input className="form-control" type="text"
                  name="image2"
                  value={image2}
                  id="image2"
                  onChange={(e) => setImage2(e.target.value)}/>
                <input type="file" onChange={uploadFileHandler2}></input>
                {uploading && <div>Uploading...</div>}
            </div>

            <div className="form-group">
              <label htmlFor="image3">Image 3</label>
              <input className="form-control" type="text"
                  name="image3"
                  value={image3}
                  id="image3"
                  onChange={(e) => setImage3(e.target.value)}/>
                <input type="file" onChange={uploadFileHandler3}></input>
                {uploading && <div>Uploading...</div>}
            </div>

            <div className="form-group">
              <label htmlFor="image4">Image 4</label>
              <input className="form-control" type="text"
                  name="image4"
                  value={image4}
                  id="image4"
                  onChange={(e) => setImage4(e.target.value)}/>
                <input type="file" onChange={uploadFileHandler4}></input>
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
              <label htmlFor="color">Color</label>
              <input className="form-control" type="text"
                  name="color"
                  value={color}
                  id="color"
                  onChange={(e) => setColor(e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="countInStock">CountInStock</label>
              <input className="form-control" type="number"
                  name="countInStock"
                  value={countInStock}
                  id="countInStock"
                  onChange={(e) => setCountInStock(e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="name">Category</label>
              <select className="form-control" type="text"
                  name="category"
                  value={category}
                  id="category"
                  style={{ height: 'auto' }}
                  onChange={(e) => setCategory(e.target.value)}>
                    <option value=''></option>
                    {Categories.map((c, i) => (
                      <option key={i} value={c.id}>{c.title}</option>
                    ))}
                  </select>
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

      
    </div></>
  );
}
export default AddProduct;
