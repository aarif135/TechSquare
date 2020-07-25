import React from 'react'
import Logo from '../../Images/logo.png'
const Footer=()=>{
return (
    <div className='main-footer'>
        <div className="row ">
    <div className="col-lg-6 ">
        <h1 className="name">contact us</h1>
        <h3 className='name' >NAME</h3>
        <input className='footer-input' placeholder='name'/>
        <h3 className='name' >Email</h3>
        <input className='footer-input' placeholder='email'/>
        <h3 className='name' >Phone number</h3>
        <input className='footer-input' placeholder='password'/>
        <br/>
        <button className="btn btn-success">SUBMIT </button>

    </div>
    <div className="col-lg-6 ">
<img alt="logo" src={Logo} height="500px" width='500px'/>
    </div>
        </div>
        <div style={{background:"grey",width:'100%'}}>
            <h5 style={{textAlign:'center'}}>ALL RIGHT RESERVED 2018-20</h5>

        </div>
    </div>
)
}
export default Footer