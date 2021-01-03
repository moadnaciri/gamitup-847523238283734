import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
//import './App.css';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import Footer from './components/Footer';
import ErrorScreen from './screens/ErrorScreen';
import ProductsPage from './screens/ProductsPage';
import ProductDetails from './screens/ProductDetails';
import CartPage from './screens/CartPage';
import ScrollToTop from './ScrollToTop';
import ContactPage from './screens/ContactPage';
import AboutUs from './screens/AboutUs';
import Terms from './screens/Terms';
import Categories from './Data/Categories';
import ShippingPage from './screens/ShippingPage';
import PaymentPage from './screens/PaymentPage';
import PlaceOrderPage from './screens/PlaceOrderPage';
import OrderPage from './screens/OrderPage';
import AddProduct from './screens/Admin/AddProduct';
import Users from './screens/Admin/Users';
import Statistics from './screens/Admin/Statistics';
import ViewProducts from './screens/Admin/ViewProducts';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  
  return (
    
      <Router>
        <ScrollToTop>
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/product/:id" component={ProductDetails} />
            
            <Route exact path="/orders" component={OrdersScreen} />
            <Route exact path="/contact-us" component={ContactPage} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/terms-and-conditions" component={Terms} />
            <Route exact path="/shop" component={ProductsPage} />
            <Route exact path="/profile" component={ProfileScreen} />
            <Route exact path="/order/:id" component={OrderPage} />
            <Route exact path="/admin" >
              {() => {
                if (userInfo){
                  if(userInfo.isAdmin) {
                    return <Redirect to='/admin/add-product' />
                  } else {
                    return <ErrorScreen />
                  }
                } else {
                  return <Redirect to='/signin' />
                }
              }}
            </Route>
            <Route exact path="/admin/add-product" >
              {() => {
                if (userInfo){
                  if(userInfo.isAdmin) {
                    return <AddProduct />
                  } else {
                    return <ErrorScreen />
                  }
                } else {
                  return <Redirect to='/signin' />
                }
              }}
            </Route>
            <Route exact path="/admin/view-products" >
              {() => {
                if (userInfo){
                  if(userInfo.isAdmin) {
                    return <ViewProducts />
                  } else {
                    return <ErrorScreen />
                  }
                } else {
                  return <Redirect to='/signin' />
                }
              }}
            </Route>
            <Route exact path="/admin/users" >
              {() => {
                if (userInfo){
                  if(userInfo.isAdmin) {
                    return <Users />
                  } else {
                    return <ErrorScreen />
                  }
                } else {
                  return <Redirect to='/signin' />
                }
              }}
            </Route>
            <Route exact path="/admin/statistics" >
              {() => {
                if (userInfo){
                  if(userInfo.isAdmin) {
                    return <Statistics />
                  } else {
                    return <ErrorScreen />
                  }
                } else {
                  return <Redirect to='/signin' />
                }
              }}
            </Route>
            <Route exact path="/shipping" component={ShippingPage} />
            
            <Route exact path="/payment" component={PaymentPage} />
            <Route exact path="/placeorder" component={PlaceOrderPage} />
            <Route exact path="/signin" component={SigninScreen} />
            <Route exact path="/register" component={RegisterScreen} />
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/cart" component={CartPage} />
            
            <Route exact path="/:category">
              {(params) => {
                //console.log(params.location.pathname)
                for (var i=0; i< Categories.length; i++) {
                  //console.log(Categories[i])
                  var v = Categories[i].id
                  var ii= `/${v}`
                  if(ii === params.location.pathname) {
                    return (<ProductsPage />)
                  }
                };
                return <ErrorScreen />
              }}
            </Route>
            <Route component={ErrorScreen} />
        </Switch>
        <Footer />
        </ScrollToTop>
        </Router>
      
  );
}

export default App;
