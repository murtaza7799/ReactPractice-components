import { Button } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const ProductForm = () => {
    let navigate= useNavigate;
    return (<div>
      <Button variant='contained'
      component={Link}
      to="/ProductDetail"
       onClick={() =>{
         //navigate("/");

       }}
      > Product Detail</Button>


    </div>  );
}
 
export default ProductForm;