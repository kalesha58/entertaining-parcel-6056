import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from   "axios"
import "./Outlook.css"
import Footer from './Footer/Footer'

function Outlook() {
  const [out,setOut]=useState([])
  useEffect(() => {
    axios
      .get(
        ` https://newsapi.org/v2/top-headlines?country=us&apiKey=848784ea314f4eb2a4544e909b40c2cc`
      )
      .then((r) =>  setOut(r.data.articles))
      
  },[]);

  return (
    <>
    <div className='box_grid'>
   {out.map((el)=>{
     // console.log(el)
    return(

    <div className='box_box'>
      <img className='box_url' src={el.urlToImage} alt="" />
      <h3>{el.title}</h3>
      <p>{el.publishedAt}</p>
     
      <p>{el.url}</p>
    </div>
    )
   })}
        
    </div>
        <Footer/>
    </>
  )
    
}

export default Outlook
