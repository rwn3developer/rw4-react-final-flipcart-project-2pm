import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Users/Home';
import AdminLogin from './Admin/AdminLogin';
import AdminRegister from './Admin/AdminRegister';
import AdminProduct from './Admin/AdminProduct';
import AdminCategory from './Admin/AdminCategory';
import Layout from './components/Layout';
import Product from './Users/Product';
import ProductDetails from './Users/ProductDetails';
import Login from './Users/Login';
import Register from './Users/Register';
import Logout from './Users/Logout';
import { useEffect } from 'react';
import Userauth from './Users/Userauth';
function App() {

     useEffect(()=>{
          Userauth();
     },[])

     return (
          <BrowserRouter>
               <Routes>
                    {/* user route */}
                    <Route element={<Layout />}>
                         <Route path='/' element={<Home />}></Route>
                         <Route path='/product' element={<Product />}></Route>
                         <Route path='/product_details/:productId' element={<ProductDetails />}></Route>
                         <Route path='/logout' element={<Logout />}></Route>
                         <Route path='/login' element={<Login />}></Route>
                         <Route path='/register' element={<Register />}></Route>

                    </Route>


                    {/* Admin route */}
                    <Route path='/admin' element={<AdminLogin />}></Route>
                    <Route path='/admin/register' element={<AdminRegister />}></Route>
                    <Route path='/admin/category' element={<AdminCategory />}></Route>
                    <Route path='/admin/product' element={<AdminProduct />}></Route>
               </Routes>
               
          </BrowserRouter>
     );
}

export default App;
