import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import Header2 from '../components/Header2';

function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));

  }
  return (
  <>
  <Header2 />
  <div className="form-container">
    
    <form className="login-form" onSubmit={submitHandler}>
        <h2 className="title margin-bottom-35">Log In</h2>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input name="password" onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" />
        </div>
        
        <div className="btn-wrapper" style={{ marginBottom: '30px' }}>
          <button className="boxed-btn" type="submit"><span>
            {loading ? <div>Loading...</div> : 'LOG IN'}
          
            </span> </button>{error && <div>{error}</div>}
        </div>
        <p className="forget-btn" style={{ marginTop: '30px' }}>New to GAMITUP? <br /></p>
        <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="forget-btn" >Create your GAMITUP account</Link>
      </form>


    {/*<form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Sign-In</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
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
          <button type="submit" className="button primary">Signin</button>
        </li>
        <li>
          New to amazona?
        </li>
        <li>
          <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="button secondary text-center" >Create your amazona account</Link>
        </li>
      </ul>
    </form>*/}
  </div>
  </>
  )
}
export default SigninScreen;