import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Search.css";
import { useState } from "react";
import {Link} from "react-router-dom"
import Footer from "../../Pages/Footer/Footer"

const Search = () => {
  const { search } = JSON.parse(localStorage.getItem("search"));
  const [d,setD]=useState([])
  const [add,setAdd]=useState([]);
  
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=Apple&from=2022-09-29&sortBy=popularity&apiKey=848784ea314f4eb2a4544e909b40c2cc`
      )
      .then((r) =>  setAdd(r.data.articles))
  },[]);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=Apple&from=2022-09-29&sortBy=popularity&apiKey=848784ea314f4eb2a4544e909b40c2cc`
      )
      .then((r) =>  setD(r.data.articles))
  },[]);
  return <div className="main_content_s">
    {/* <> */}
    <div>

    {d.map((e)=>((e.source.name[0].toLowerCase()==search[0])&&(
      <div key={e.id} className="container">
            
            {/* {console.log(e)} */}
            <div className="search_link" >

                <Link >{e.url}</Link>
            </div>
            <div className="l_box">

                <img className="search_img1" src={e.urlToImage} alt="url" />
                  <p className="search_content">{e.description}</p>
            </div>
        </div>)
    ))}
    </div>
    <div className="main_content_2s">
      <div>
        {add.slice(0,10).map((el)=>{
          return(

          <div>

            {/* // {console.log(el)} */}  
            <div>
            <img className="add_image" src={el.urlToImage} alt="" />
             <p className="add_des">{el.description}</p>
            </div>
       
          </div>
          )
 
        })}
      </div>

    </div>
          {/* </> */}
  <div>

    {/* <Footer/> */}
  </div>
  </div >;
};

export default Search;
