import React,{useState,useEffect} from 'react'
import ViewCard from './CardsView'
import Button from './Button'
import Navbar from '../Screens/Navbar'
import { withRouter } from "react-router";
import{addedToCart} from '../../Config'
import {PlusSquareFilled,MinusSquareFilled  } from '@ant-design/icons'


const ViewDetail=(props)=>{
    // const [qunatity,setQuantity]=useState('')
    const [counter,setCounter]=useState(1)
            useEffect(()=>{
                handleChange()
            },[counter])
    const handleChange=(e)=>{
     
    if(counter>10){
        setCounter(10)
    }
    else if(counter<1){setCounter(1)}
      

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
<div style={{display:"flex",justifyContent:"flex-start",alignItems:'center'}}>
 <PlusSquareFilled style={{fontSize:"40px"}} onClick={()=>{setCounter(counter+1)}}/><h3 style={{marginLeft:"20px"}}>{counter}</h3>
<MinusSquareFilled style={{fontSize:"40px",marginLeft:"20px"} } onClick={()=>{setCounter(counter-1)}}/>
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