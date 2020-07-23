import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from './Button'

export default function Modals(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
<h4 className="space">NAME:</h4>              <input placeholder="NAME" className='style-input '  />
<h4 className="space">EMAIL:</h4>              <input placeholder="EMAIL" className='style-input' />
<h4 className="space">ADDRESS:</h4>              <input placeholder="ADDRESS" className='style-input' />
<h4 className="space">Method of payment</h4>
Via Online <input name='cash' type="radio"/>
<br/>
CASH ON DELIVERY<input name="cash" type="radio"/>
<h3>Quantity</h3><p style={{padding:"10px",border:'solid black 1px',borderRadius:"10px"}}>
    {props.quantity}
</p>
<div style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
    <button className="btn btn-success space">Check out</button>
</div>

          </Modal.Body>
        
        </Modal>
      </>
    );
  }
  