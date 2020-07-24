import React from 'react'
const Footer=()=>{
return (
    <div className='container-fluid main-footer'>
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
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28957.884351484012!2d67.14463192462476!3d24.87288027905881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3399d42aef5f1%3A0xa5813c4e620196a7!2sShah%20Faisal%20Colony%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1595627625290!5m2!1sen!2s" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

    </div>
        </div>

        
    </div>
)
}
export default Footer