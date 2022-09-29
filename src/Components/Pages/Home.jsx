import React from "react";
import "./Home.css";
import kashmir_image from "../../Assests/kashmir_image.jpg";
import ayodya from "../../Assests/ayodya.jpg";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=2bbb038147544c848c7985a613df362f&q=india`
      )
      .then((res) => {
        // console.log(res.data.articles[0].title)
        setData(res.data.articles);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  //sports
  const [sports, setSports] = useState([]);
  const getDataS = () => {
    axios
      .get(
        ` https://newsapi.org/v2/top-headlines?apiKey=2bbb038147544c848c7985a613df362f&q=sports`
      )
      .then((res) => {
        // console.log(res.data.articles[0].title)
        setSports(res.data.articles);
      });
  };

  useEffect(() => {
    getDataS();
  }, []);

  // money api
  const [money, setmoney] = useState([]);
  const MoneygetData = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?apiKey=2bbb038147544c848c7985a613df362f&q=Business`
      )
      .then((res) => {
        // console.log(res.data.articles[0].title)
        setmoney(res.data.articles);
      });
  };

  useEffect(() => {
    MoneygetData();
  }, []);

  const [technology, setTechnology] = useState([]);
  const technologyData = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?apiKey=2bbb038147544c848c7985a613df362f&q=science`
      )
      .then((res) => {
        // console.log(res.data.articles[0].title)
        setTechnology(res.data.articles);
      });
  };

  useEffect(() => {
    technologyData();
  }, []);

  // crypto api
  const [crypto, setcrypto] = useState([]);
  const cryptogetData = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?apiKey=2bbb038147544c848c7985a613df362f&q=crypto`
      )
      .then((res) => {
        // console.log(res.data.articles[0].title)
        setcrypto(res.data.articles);
      });
  };

  useEffect(() => {
    cryptogetData();
  }, []);

  return (
    <>
      {" "}
      {/* <div className="main_image">
        // //{" "}
        <p className="content">
          Ayodhya Settled, Focus Is Back On Places Of Worship Act, 1991
        </p>
        //{" "}
      </div> */}
      <div>
        {data.slice(0, 1).map((el) => {
          return (
            <div key={el.id}>
              <div>
                <img className="main_img" src={kashmir_image} alt="ks" />
                <div className="border_box"></div>
              </div>
              <p className="publish">
                Ramsar List: What it means for JK and Country’s water bodies
              </p>
              <p className="time">OutLook:{el.publishedAt}</p>
              <div className="info">
                <p>
                  Environment is becoming the most trending topic on earth owing
                  to visible damaging effects of climate change. Kashmir valley
                  owing to its unique natural beauty has always been an
                  environmentally fragile zone. The topography of Kashmir and
                  harsh terrain makes things complicated and brings to priority
                  the efforts to safeguard key natural resources. Kashmir has
                  been a world known hub of beautiful water bodies and serene
                  mountains.
                </p>
                <div className="info_1">
                  <p>
                    @ "In Kashmir, two water bodies were already on the list –
                    Hokersar and Wular Lake. In the Jammu region the
                    Surinsar-Mansar was also on the list already.
                  </p>
                  <p>
                    @ The biggest development that deserves all the appreciation
                    is the cleanliness drive launched in all the major water
                    bodies of Jammu and Kashmir, however, the most striking
                    feature now is the more water bodies of Jammu and Kashmir
                    entering into the prestigious Ramsar List.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr className="line" />
      <div className="main_content_grid">
        {sports.slice(0, 1).map((el) => {
          return (
            <div key={el.id} className="main_content">
              {/* <img  src={el.urlToImage} alt="url" /> */}
              <img className="main_img_1" src={ayodya} alt="ayodya" />

              <p className="title">
                Ayodhya And Hubballi: The Cities That Defined The Course Of
                Indian Politics
              </p>
 
              <p className="publish_data">{el.publishedAt}</p>

              <p className="content_data">
                If the Ram Temple movement established the saffron outfit in the
                Hindi belt, the Hubballi campaign catapulted it to power in the
                state
              </p>
             <p>@Ayodhya Settled, Focus Is Back On Places Of Worship Act, 1991</p>
            </div>
          );
        })}
        {/* two in one */}
        <div className="two_in_one">
          {data.slice(0, 2).map((el) => {
            return (
              <div key={el.id}>
                <p className="two_in_one_head">{el.title}</p>
                <div className="author">
                  <p>
                    {el.author}:{el.publishedAt}
                  </p>
                </div>
                <div className="flex_content">
                  <img className="main_img_2" src={el.urlToImage} alt="url" />
                  <p>{el.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* two in oe end */}
      </div>
      <hr />
      {/* business */}
      {<h1 className="money_heading">Businees & Money</h1>}
      <div className="business_grid">
        {money.slice(0, 1).map((el) => {
          return (
            <div key={el.id} className="business_card">
              <img className="money_img" src={el.urlToImage} alt="url" />
              <p className="money_img_title">{el.title}</p>
              <div className="author">
                <p>
                  {el.author}:{el.publishedAt}
                </p>
              </div>
              <div className="money_content">
                <p>{el.content}</p>
              </div>
            </div>
          );
        })}
        {/* technology */}
        <div className="tech_two_in_one">
          {technology.slice(0, 3).map((el) => {
            return (
              <div key={el.id} className="tech_card">
                <img className="tech_img" src={el.urlToImage} alt="url" />
                <p className="tech_img_title">{el.title}</p>
                {/* <div className="tech_author">
                <p>
                  {el.author}:{el.publishedAt}
                </p>
              </div> */}
                <div className="tech_content">{/* <p>{el.content}</p> */}</div>
              </div>
            );
          })}
        </div>
      </div>
      {/* technology end */}
      <div>
        <hr />
        {/* Crypto part  */}
        {crypto.map((el) => {
          return (
            <div key={el.id}>
              <img className="crypto_img" src={el.urlToImage} alt="url" />
              <h3>{el.publishedAt}</h3>

              <p>{el.title}</p>

              <p>{el.content}</p>
              <p>{el.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
