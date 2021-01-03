import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logout, update } from '../actions/userActions';
import { listMyOrders } from '../actions/orderActions';
import { useDispatch, useSelector } from 'react-redux';
import Header2 from '../components/Header2';

function ProfileScreen(props) {
  //const [name, setName] = useState('');
  //const [password, setPassword] = useState('');
  //const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, email, name, password }))
  }
  const userUpdate = useSelector(state => state.userUpdate);
  const { loading, success, error } = userUpdate;

  const myOrderList = useSelector(state => state.myOrderList);
  const { loading: loadingOrders, orders, error: errorOrders } = myOrderList;
  useEffect(() => {
    if (userInfo) {
      setEmail(userInfo.email);
      setName(userInfo.name);
      setPassword(userInfo.password);
    }
    dispatch(listMyOrders());
    return () => {

    };
  }, [userInfo])

  return (
  <>
    <Header2 />
    
      <div className="form-container">
        <form className="login-form" onSubmit={submitHandler}>
        <h2 className="title margin-bottom-35">User Profile</h2>
        
        <h2 className="title margin-bottom-35">
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {success && <div>Profile Saved Successfully.</div>}
        </h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="name" id="name" name="name" value={name} className="form-control" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input value={email} type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input value={password} type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
        </div>


        <div className="btn-wrapper" style={{ marginBottom: '30px' }}>
          <button className="boxed-btn" type="submit" style={{ marginRight: '10px' }}><span>
            {loading ? 'Loading...' : 'Update'}
          
            </span> </button>
            <button className="boxed-btn" type="button" onClick={handleLogout}><span>
            Logout
          
            </span> </button>
            {userInfo?.isAdmin && <><br /><Link to='/admin' style={{ marginTop: '10px' }} className="boxed-btn"><span>
            Admin Panel
          
            </span> </Link></>
              
            }
            {error && <div>{error}</div>}
        </div>
        
      </form>
      </div>



      
        {/*<form onSubmit={submitHandler} >
          <ul className="form-container">
            <li>
              <h2>User Profile</h2>
            </li>
            <li>
              {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}
              {success && <div>Profile Saved Successfully.</div>}
            </li>
            <li>
              <label htmlFor="name">
                Name
          </label>
              <input value={name} type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="email">
                Email
          </label>
              <input value={email} type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input value={password} type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
              </input>
            </li>

            <li>
              <button type="submit" className="button primary">Update</button>
            </li>
            <li>
              <button type="button" onClick={handleLogout} className="button secondary full-width">Logout</button>
            </li>

          </ul>
        </form>*/}
        <div className="table-responsive" style={{ borderTop: '1px solid lightgray' }}>
          {
        loadingOrders ? <div>Loading...</div> :
          errorOrders ? <div>{errorOrders} </div> :
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
                  {orders === 0 ?
            <div>
              Cart is empty
          </div>
            :
            orders.map(order =>
                  <tr>
                    <td className="product-name" key={order._id} style={{ borderRight: '1px solid lightgray' }}>
                      <div className="product-content">
                        <p className="title" style={{ padding: '5px 10px' }}>{order._id}</p>
                      </div>
                    </td>
                    <td className="product-name" style={{ borderRight: '1px solid lightgray' }}>
                      <div className="product-content">
                        <p className="title" style={{ padding: '5px 10px' }}>{order.createdAt}</p>
                      </div>
                    </td>
                    <td className="product-name" style={{ borderRight: '1px solid lightgray' }}>
                      <div className="product-content">
                        <p className="title" style={{ padding: '5px 10px' }}>{order.totalPrice}</p>
                      </div>
                    </td>
                    <td className="product-name" style={{ borderRight: '1px solid lightgray' }}>
                      <div className="product-content">
                        <p className="title" style={{ padding: '5px 10px' }}>{order.isPaid}</p>
                      </div>
                    </td>
                    <td className="product-name" style={{ borderRight: '1px solid lightgray' }}>
                      <div className="product-content">
                        <p className="title" style={{ padding: '5px 10px' }}>{order.isPaid}</p>
                      </div>
                    </td>
                    <td className="product-name" >
                      <div className="product-content">
                        <p className="title" style={{ padding: '5px 10px' }}>
                          <Link to={"/order/" + order._id} style={{ padding: '5px 10px', border: '1px solid lightgray' }}>DETAILS</Link>
                          </p>
                        
                      </div>
                    </td>
                    
                  </tr>
                  )}
                </tbody>
              </table>}
            </div>
 
    {/*<div className="profile-orders content-margined">
      {
        loadingOrders ? <div>Loading...</div> :
          errorOrders ? <div>{errorOrders} </div> :
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.totalPrice}</td>
                  <td>{order.isPaid}</td>
                  <td>
                    <Link to={"/order/" + order._id}>DETAILS</Link>
                  </td>
                </tr>)}
              </tbody>
            </table>
            
      }
    </div>*/}
      
      
    </>
    )
}

export default ProfileScreen;