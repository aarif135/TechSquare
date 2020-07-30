import React from 'react'
import Logo from "../../Images/logo.png";
import "../../App.css";
import { withRouter } from "react-router";
import {MenuOutlined } from '@ant-design/icons'
import {ShoppingCartOutlined } from '@ant-design/icons'
import swal from 'sweetalert'

const Navbar =(props)=>{
  const pushToDetail=()=>{
    props.history.push('/adminPanel')
  }

    return(
        <div className="navbar navbar-expand-sm">
          <div className='navbar-brand'>        <img alt='LOGO' src={Logo} height="100" />
</div>
<button className='navbar-toggler ml-auto' data-toggle='collapse' data-target="#menu"><MenuOutlined/></button>
        <div className='collapse navbar-collapse' id='menu'>
        <ul className="navbar-nav" style={{display:props.flag?'none':null}}>
         <div className='dropdown' style={{display:'inline'}}>
        <li className='dropdown-toggle nav-item nav-link ' id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All categories</li>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" onClick={()=>{swal("This feature will avaliable soon"
)}} href='#'>Clothing</a>
    <a className="dropdown-item"  onClick={()=>{swal("This feature will avaliable soon"
)}} href='#'>Appliance</a>
    <a className="dropdown-item"  onClick={()=>{swal("This feature will avaliable soon"
)}}    href='#'>Electronic</a>
  </ul>
  </div>
          <a href='#topDeals' style={{textDecoration:'none',color:'black'}}>
          <li className='nav-item nav-link' >TOP DEALS</li>
          </a>
          <li className='nav-item nav-link'>TOP PRODUCTS</li>
        </ul>
        {!props.flag?        <button onClick={pushToDetail} className='btn btn-primary ml-auto' >ADD ADVERTISMENT</button>

:<ShoppingCartOutlined onClick={()=>{    props.history.push('/Cart')
}} className="ml-auto" style={{fontSize:"40px",cursor:"pointer"}}/>}
</div>
      </div>
    )

}
export default withRouter(Navbar)