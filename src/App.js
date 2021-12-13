import Product from "./Component/Products";
import './App.css';

import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import ProductForm from "./Component/ProductForm";
import SingleProduct from "./Component/SingleProduct";
import ProductDetail from "./Component/ProductDetail";
import PageNotFound from "./Component/PageNotFound";

function App() { 

  <Link>Home </Link>
  
  return (
    <div>
      <div>
      <ul id="menu">
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/ProductForm">ProductForm</Link>
          </li>
        
        </ul>
      </div>
      <Routes>
    <Route  path="/Products" element={<Product/>}/>
    <Route  path="/ProductForm" element={<ProductForm/>}/>
    <Route  path="/SignleProduct" element={<SingleProduct/>}/>
    <Route  path="/ProductDetail" element={<ProductDetail/>}/>
    <Route  path="*" element={<PageNotFound/>}/>
 
   </Routes>
    

  </div>
   

  );
}
export default App;
