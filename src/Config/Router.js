import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  
  } from "react-router-dom";
  import Home from '../Components/Screens/Home'
  import ViewDetail from '../Components/Screens/ViewDetail'
  import Form from '../Components/Screens/Form'
  import Cart from '../Components/Screens/Cart'
const Routers =(props)=>{
return(  
<Router>
    <div>
      <Switch>
      <Route path="/" component={Home} exact  />

        <Route path="/viewDetail" component={ViewDetail} />
        <Route path="/adminPanel" component={Form} />
        <Route path="/Cart" component={Cart} />


        
  
      </Switch>
    </div>
  </Router>)
}
export default Routers