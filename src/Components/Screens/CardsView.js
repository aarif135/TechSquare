import React from 'react'

const DetailCards =(props)=>{
    const{item}=props
    console.log(item)

    return(
    <div className='row container' >
        <div className='col-12 col-lg-12 col-sm-12 col-md-12'>
            
            <div className='row' style={{height:"20rem",borderRadius:'8px'}}>
                <div style={{display:"flex",justifyContent:'center',alignItems:'center'}}  className='col-12 col-lg-12 col-sm-12 col-md-12 '>
                    <img alt='cards' src={item.url} className="img-rounded"   width='300px'
              height="250px"/>
              
              </div>
              
              

            </div>
            
        </div>

    </div>)
}
export default DetailCards