import { Button } from '@mui/material';
import React from 'react';
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";


const Product = (props) => {
    const [counter, setCounter]= React.useState(5);

    const countUp = () => {
         setCounter(counter + 1);
    }
    const countDown = () => {
         setCounter(counter - 1);
    }
    let themeStyle ={
        color: counter >=5 ?  'green':'red',
        backgroundColor: props.theme,
   
       }

  
    return ( 

        <div style={themeStyle}>
            <h1 ><AccessTimeFilledIcon /> Counter Component {counter}</h1>
        <Button variant="contained" onClick={countDown}>-</Button> 
        {" "+counter +" "} 
        <Button variant="contained" onClick={countUp}>+</Button><br/>
        Current counterValue is: {counter}<br/>
        {counter <0 && <span>Count is less than zero</span>}
        <hr/>
        </div> 
  
    
    
    );
}
 
export default Product;
