import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';
import Header2 from '../components/Header2';

function RegisterScreen(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  }
  return (
  <>
  <Header2 />
  <div className="form-container">


    <form className="login-form" onSubmit={submitHandler}>
        <h2 className="title margin-bottom-35">Create Account</h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="name" id="name" name="name" className="form-control" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
        </div>
        
        <div className="form-group">
          <label htmlFor="rePassword">Re-Enter Password</label>
          <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)} className="form-control" placeholder="Re-Enter Password" />
        </div>
        




        <div className="btn-wrapper" style={{ marginBottom: '30px' }}>
          <button className="boxed-btn" type="submit"><span>
            {loading ? <div>Loading...</div> : 'Register'}
          
            </span> </button>{error && <div>{error}</div>}
        </div>
        <a className="forget-btn" style={{ marginTop: '30px' }}>Already have an account?<br /></a>
        <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect} className="forget-btn" >LOG IN</Link>
      </form>




    {/*<form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Create Account</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="name">
            Name
          </label>
          <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="rePassword">Re-Enter Password</label>
          <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
          </input>
        </li>

      </ul>
    </form>*/}
  </div>
  </>
  )
}
export default RegisterScreen;