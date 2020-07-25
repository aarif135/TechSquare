import React,{useState} from 'react'
import ViewCard from './CardsView'
import Cars from '../../Images/car.jpg'
import Button from './Button'
import Navbar from '../Screens/Navbar'
import { withRouter } from "react-router";
import{addedToCart} from '../../Config'


const ViewDetail=(props)=>{
    const [qunatity,setQuantity]=useState('')
    const [counter,setCounter]=useState(1)
    const handleChange=(e)=>{
        setQuantity(e.target.value)
    setCounter(e.target.value)        
    if(e.target.value>10){
        setCounter(10)
    }
    else if(e.target.value<1){setCounter(1)}
      

    }
  const  addToCart=(item)=>{
      
      let obj={...item,qunatity:counter}
      addedToCart(obj).then(res=>{
          props.history.push("/Cart")
      })

    }
    
    let item=props.location.state
    
return(
    <div>
            <Navbar flag={true}/>
        <h1>View Detail</h1>
        <div className='container row'>
            <div  className='col-lg-6 col-md-5 col-sm-6 col-12'>
        <ViewCard item={item}/>
        
        

            </div>
            <div  className='col-lg-6 col-md-5 col-sm-6 col-12'>
    <div style={{height:'20rem'}}>
<h1 style={{textAlign:'center'}}>{item.productName.toUpperCase()}</h1>
<hr/>
<h3 className='container'>{`Price:${item.price}`}</h3>
<h3 className="container">{`Total price:${counter*item.price}x${counter}`}</h3>
<hr/>
<div style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
    <input  value={counter} onChange={handleChange} placeholder="Choose Quantity" className="form-control"  type='number'/>
    

</div>
<br/>

<div>
    <Button onClick={()=>addToCart(item)}>ADD TO CART</Button>
    </div>


    </div>
            </div>
            
            
        </div>
    </div>
)
}
export default withRouter(ViewDetail)