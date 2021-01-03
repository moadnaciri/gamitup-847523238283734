import React from 'react'
import { Link } from 'react-router-dom'
import Header2 from '../components/Header2'

function ErrorScreen() {
    return (
        <>
        <Header2 />
           {/*============= error area start here ===============*/}
<div className="error-area padding-top-40 md-pd-top-0">
  <div className="error">
    <h1>404</h1>
    <h2>Oops, Something went wrong.</h2>
    <div className="btn-wrapper">
      <Link style={{ textDecoration: 'none' }} to="/" className="boxed-btn" type="button">Go Back
        Home</Link>
    </div>
  </div>
</div>
{/*============= error area end here ===============*/}

        </>
    )
}

export default ErrorScreen
