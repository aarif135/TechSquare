import "firebase/firestore";
import * as firebase from "firebase/app";
import 'firebase/storage';
import swal from '@sweetalert/with-react'
import React from 'react'

const firebaseConfig = {
    apiKey: "AIzaSyAMvyQlN1VAdOxZNb4xYmX79ccEfkrBb-I",
    authDomain: "techsquare-a301c.firebaseapp.com",
    databaseURL: "https://techsquare-a301c.firebaseio.com",
    projectId: "techsquare-a301c",
    storageBucket: "techsquare-a301c.appspot.com",
    messagingSenderId: "415069052743",
    appId: "1:415069052743:web:984ffe8f2ae231ddbaf662",
    measurementId: "G-ZV321W22B2"
  };
  firebase.initializeApp(firebaseConfig);
  function SetData(productName,price,category,image,Ad_ID,props){

 let fileType=image.type.split('')[0]
 let fileName=`techSquare_${Date.now()}`
 fileName=`${fileName}.${fileType}`

 let storageRef= firebase.storage().ref(`ads/${fileName}`)
storageRef.put(image).then(res=>{
    storageRef.getDownloadURL().then(url=>{
        const data={
            Ad_ID,
            productName,price,category,url
        }
        firebase.firestore().collection('addData').add(
            data
        
        ).then(res=>{
            swal("YOUR IS BEINGLIVE NOW");
            props.history.push('/')
            

        })
    })
})
   }
  async function addedToCart(item){
      console.log(item)
     var flag=false
      await firebase.firestore().collection('Cart').get().then(res=>{
       res.forEach(docs=>{
console.log("docs.data(",docs.data())
         if(docs.data().Ad_ID==item.Ad_ID){
             flag=true

             console.log(flag)
         }
       })
      })
   if(!flag){
       firebase.firestore().collection('Cart').add(
           item
       ).then(()=>{
        swal(
            <div>
              <h1>ADDED TO CART</h1>
              <p>
            Check Cart
              </p>
            </div>
          )
          
        
    })
       }else{
           alert("already added to cart")
       }
   }
    async  function getAds(){
let ads=await firebase.firestore().collection('addData').limit(4)
let data=await ads.get()
return data}
async function getCart(){
    let Cart= await firebase.firestore().collection('Cart')
    let AllCart =await Cart.get()
   return AllCart
}
function checkOut(data){
    firebase.firestore().collection('CheckOut').add(data).then(res=>{
        firebase.firestore().collection('Cart').where('Ad_ID','==',data.id).get().then(res=>{
            res.forEach(docs=>{
                docs.ref.delete().then(res=>{
                 
                    swal({
                        title: "YOUR RESPONSE HAS BEEN RECORED",
                        text: "Thanks For Shopping",
                        icon: "success",
                      });
                })
            })
        })
    })
}
export{ firebase,SetData,getAds,addedToCart,getCart,checkOut}