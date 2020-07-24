import React,{useState} from 'react'
import '../../App.css'
import {SetData} from '../../Config'
function Form(){
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const [selectedValue,setValue]=useState('')
    const [productImg,setImg]=useState('')
    const handleChange=(key,value)=>{
        if(key==='name'){
            setName(value)
        }
        else if(key==='price'){
            setPrice(value)
        }
        else if(key==='select'){
            setValue(value)
        }
        else{
            setImg(value)
        }
    }
    const detailAdd=()=>{
        SetData(name,price,selectedValue,productImg)
        
    }
    return(<div className='form-add'>
        <div className='container-fluid form row'>
            <div className="col-lg-12 col-sm-12 col-12 col-md-12">
                <div className='row' >
                    <div className='col-lg-12 col-sm-12 col-md-8 col-12 detail'>
                    <h1 style={{textAlign:'center',color:"white"}}>ADD DETAILS</h1>
                    </div>
                </div>
                    <div className='row'>

                <div className='col-lg-12 col-sm-12 col-md-8 col-12'>
                     <label>PRODUCT NAME</label>
                    <input onChange={(e)=>{handleChange("name",e.target.value)}} placeholder='PRODUCT NAME' className='form-control'/>
                </div>
                </div>
                <div className='row'>
                <div className='col-lg-12 col-sm-12 col-md-8 col-12'>
                <label>PRODUCT PRICE</label>

                    <input onChange={(e)=>{handleChange("price",e.target.value)}}  type='number' placeholder='PRICE' className='form-control'/>
                </div>
                </div>
                <div className='row'>
                <div className='col-lg-12 col-sm-12 col-md-8 col-12'>
                <label>PRODUCT CATEGORY</label>
        <select onChange={(e)=>{handleChange("select",e.target.value)}} defaultValue='SELECT' className='form-control'>

               <option >CLOTHING</option>
               <option>ELECTRONICS</option>

               <option>MOBILE PHONE</option>

               
        </select>
                </div>
                </div>
                <div className='row'>
                <div className='col-lg-12 col-sm-12 col-md-8 col-12'>
                <label style={{display:"block"}}>PRODUCT IMAGE</label>

                    <input onChange={(e)=>{handleChange("image",e.target.files[0])}}  type='FILE' />
                </div>
                </div>
                <div
style={{display:"flex",justifyContent:'center',marginTop:"4px"}}                >
                    <button onClick={detailAdd} style={{width:"100%"}} className='btn btn-danger'>ADD </button>
                </div>


        </div>
        
        </div>
    </div>)
}
export default Form