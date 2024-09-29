import React from 'react'
import "./coinInfo.css"
import { useState } from 'react';
    


const CoinInfo = ({heading,desc}) => {

  const shortDesc = desc.slice(0,200) + "<span style='color:Var(--grey)'> Read MOre..</span>";
  const longDesc = desc + "<span style='color:Var(--grey)'> Read less..</span>";

  const [flag,setflag] = useState("false")
  return (
    <>
    <div className='main-rap'>
    <div className='wrapper
    '>
        <h1>{heading}</h1>
        <p onClick={()=>setflag(!flag)} dangerouslySetInnerHTML={{__html: flag?shortDesc : longDesc}}></p>
    </div>
    </div>
    
    </> 
  )
}

export default CoinInfo