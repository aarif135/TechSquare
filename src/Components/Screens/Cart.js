import React,{useEffect,useState} from 'react'
import {getCart} from '../../Config'
import Card from './Cards'
import { Row, Col } from 'antd';

const Cart=()=>{
    const [Cart,setData]=useState([])
    useEffect(()=>{
        data()
    },[])

    const data= async()=>{
  let abc= await getCart()
  let arr=[]
abc.forEach(docs=>{
  arr.push(docs.data())
})
setData(arr)
}
console.log(Cart)

return(
    <div className="row">
        {Cart.map((items)=>{
            return <div className="col-lg-4">
            <Card item={items} btn="checkOut"/>

            </div>
        })}

    </div>
)
}
export default Cart