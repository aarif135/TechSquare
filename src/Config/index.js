import "firebase/firestore";
import * as firebase from "firebase/app";
import 'firebase/storage';

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
  function SetData(productName,price,category,image){

 let fileType=image.type.split('')[0]
 let fileName=`techSquare_${Date.now()}`
 fileName=`${fileName}.${fileType}`

 let storageRef= firebase.storage().ref(`ads/${fileName}`)
storageRef.put(image).then(res=>{
    storageRef.getDownloadURL().then(url=>{
        const data={
            productName,price,category,url
        }
        firebase.firestore().collection('addData').add(
            data
        
        ).then(res=>{
            console.log("data aded")
        })
    })
})
   }
   function addedToCart(item){
       firebase.firestore().collection('Cart').add(
           item
       ).then(()=>{
        
    })

   }
    async  function getAds(){
let ads=await firebase.firestore().collection('addData')
let data=await ads.get()
return data}
async function getCart(){
    let Cart= await firebase.firestore().collection('Cart')
    let AllCart =await Cart.get()
   return AllCart
}
export{ firebase,SetData,getAds,addedToCart,getCart}