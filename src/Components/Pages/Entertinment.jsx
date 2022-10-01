import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from   "axios"
import "./Entertinment.css"
import Footer from './Footer/Footer'

function Entertinment() {
  const [out,setOut]=useState([])
  useEffect(() => {
    axios
      .get(
        ` https://newsapi.org/v2/top-headlines?apiKey=848784ea314f4eb2a4544e909b40c2cc&q=science`
        // country=de&category=business
      )
      .then((r) =>  setOut(r.data.articles))
      
  },[]);
  return (
    <>
    <div className='outlook_grid'>
   {out.map((el)=>{
    // console.log(el)
    return(

    <div className='out_look_grid_1'>
      <img className='outlook_url' src={el.urlToImage} alt="" />
      <h3>{el.title}</h3>
      <p>{el.publishedAt}</p>
      <p>{el.description}</p>
      <p>{el.url}</p>
    </div>
    )
   })}
        
    </div>
    <Footer/>
    </>
  )
}

export default Entertinment
