import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from './Button'
import {checkOut} from '../../Config'
import swal from '@sweetalert/with-react'



export default function Modals(props) {
    const [show, setShow] = useState(false);
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [address,setAddress]=useState('')
    const [check,setCheck]=useState('')
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const handleChane=(key,value)=>{
    if(key==='name'){
      setName(value)
    }
    else if(key==='email'){
      setEmail(value)
    }
    else if(key==="address"){
      setAddress(value)
    }
    else{setCheck(value)}
  }
const checkOuts=()=>{
  let id=props.Add_ID
  let obj={name,email,address,check,id}
  if(name&&check&&email&&address!=null){

  checkOut(obj)
  setShow(false)
  }else{
    swal("OOPS!", "You clicked the button!", "error")}

}
  return (
      <>
        <Button variant="primary" onClick={handleShow}>
        CHECK OUT
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header  style={{background:"black",color:"white"}} closeButton>
            <Modal.Title > CHECK OUT</Modal.Title>
          </Modal.Header>
          <Modal.Body>
<h4 className="space">NAME:</h4>              <input placeholder="NAME" onChange={(e)=>handleChane("name",e.target.value)} className='style-input  '  />
<h4 className="space">EMAIL:</h4>              <input placeholder="EMAIL" onChange={(e)=>handleChane("email",e.target.value)} className='style-input' />
<h4 className="space">ADDRESS:</h4>              <input placeholder="ADDRESS" onChange={(e)=>handleChane("address",e.target.value)} className='style-input' />
<span style={{fontWeight:"bold"}}>Via Online</span> <input value="online" name='cash' onChange={(e)=>handleChane("check",e.target.value)} type="radio"/>
<br/>
<span style={{fontWeight:"bold"}}>Cash On Delivery</span><input value="chash" name="cash" onChange={(e)=>handleChane("check",e.target.value)} type="radio"/>

<h3>Quantity</h3><p style={{padding:"10px",border:'solid black 2px',borderRadius:"10px"}}>
    {props.quantity}
</p>
<h3>Total price</h3><p style={{padding:"10px",border:'solid black 2px',borderRadius:"10px"}}>
    {props.price*props.quantity}
</p>



<div style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
    <button onClick={checkOuts} className="btn btn-success space">Check out</button>
</div>

          </Modal.Body>
        
        </Modal>
      </>
    );
  }
  