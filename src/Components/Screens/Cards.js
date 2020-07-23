import React from "react";
import "../../App.css";
import Button from '../Screens/Button'
import { withRouter } from "react-router";
import Modal from './Modal'

const Cards = (props) => {
  const{item}=props
 const abc=(data)=>{
   console.log(data)
   props.history.push({  pathname: '/viewDetail',state:data})
}
  
  return (
 <div style={{width:"100%"}}>
    <div className=" row " >

        <div
          className="col-md-12 col-sm-12 col-lg-12 col-xs-12"
        >
          <div
            className="card text-center "
            style={{
              margin: "34px",
              marginLeft: "44",
              border: "solid lightblue 1px",
              height:'20rem',
            }}
          >
            <p
              className="display-5"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                fontStyle: "italic",
              }}
            >
              {item.productName}
            </p>
            <img
            
              src={item.url}
              
              width='150'
              height="100px"
              style={{
                margin: "auto",
                boxShadow: "1rem 1rem 1rem lightgrey",
              }}
              alt="profile "
            />
            <p>{item.price}</p>
          <div style={{display:'flex',justifyContent:'center',alignItems:"center",margin:'20px'}}>     
              {props.btn?            <Modal quantity={props.item.qunatity}/>:            <Button onClick={()=>{abc(item)}}>{props.btn?props.btn:'BUY NOW'}</Button>

}
</div>
          </div>
        </div>
  
  </div>
  </div>

  );
};
export default withRouter(Cards);
