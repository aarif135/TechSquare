import React, {  useState,useEffect } from "react";
import { withRouter } from "react-router";
import "../../App.css";
import Cards from "../Screens/Cards";
import { DownOutlined } from "@ant-design/icons";
import Navbar from '../Screens/Navbar'
import {getAds} from '../../Config'
import Footer from '../Screens/Footer'






const Home = (props) => {
  const [allData,setData]=useState([])
  const [search,setSearch]=useState([])
  const [flag,setFlag]=useState(false)

  useEffect( () => {
    getData()

  }, []);
const getData= async()=>{
  const data=await getAds()
  let array=[]
  data.forEach(docs=>{
array.push(docs.data())

  

  })
setData(array)
}
const handleSearch =(e)=>{
  let searchValue= allData.filter(value=>{
  return value.productName.includes(e.target.value)==true
})
 setSearch(searchValue)
 setFlag(true)
}
  return (
    <div style={{ overflow: "hidden" }}>
     <Navbar/>
      <div className="banner">
        <div>
          <h1 style={{ textAlign: "center" }}>
            Search over a million products on Shopping.com
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            justifyContent:'center',
          }}
        >
          <div className="search-by">
           
            Search by
            <DownOutlined style={{ fontSize: "16px", color: "black" }} />
            <ul id="search-ul">
              <li>Accessories</li>
              <li>Mobile Phone</li>
              <li>Property</li>
              <li>Vehicles</li>
              <li>Accessories</li>
              <li>Mobile Phone</li>
              <li>Property</li>
              <li>Vehicles</li>
            </ul>
          </div>

          <input onChange={handleSearch} id="search" placeholder="What are you shoping for?" />
          <button id="search-button">Search</button>
        </div>
      </div>
      <div id='topDeals' className='fluid-container'>
        <hr/>
        <h2>Top deals</h2>
        <hr/>
      </div>
      <div className='row'>
        { flag?search.map((item,index)=>{
          return <div  className='col-lg-3 col-md-4 col-sm-6 col-12'>
          <Cards key={index} item={item}/>
        </div>
        }):
          allData.map((item,index)=>{

           return   <div  className='col-lg-3 col-md-4 col-sm-6 col-12'>
             <Cards key={index} item={item}/>
           </div>
          })
        }
     

      </div>
      <hr/>
 <Footer/>
      
    </div>
  );
};
export default withRouter(Home);
