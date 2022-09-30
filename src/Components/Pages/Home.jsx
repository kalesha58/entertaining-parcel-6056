import React from "react";
import "./Home.css";
import kashmir_image from "../../Assests/kashmir_image.jpg";
import rama from "../../Assests/rama.jpg";
import protest from "../../Assests/protest.jpg";
import download from "../../Assests/download.jpg";
import car_img from "../../Assests/car_img.jpg";
import gst from "../../Assests/gst.jpg";
import money1 from "../../Assests/money1.jpg";
import money2 from "../../Assests/money2.jpg";
import money3 from "../../Assests/money3.jpg";
import money4 from "../../Assests/money4.jpg";
import s1 from "../../Assests/s1.jpg";
import s2 from "../../Assests/s2.jpg";
import s3 from "../../Assests/s3.jpg";
import s4 from "../../Assests/s4.jpg";
import s5 from "../../Assests/s5.jpg";
import s6 from "../../Assests/s6.jpg";
import e1 from "../../Assests/e1.jpg";
import e2 from "../../Assests/e2.jpg";
import e3 from "../../Assests/e3.jpg";
import mahesh_anna from "../../Assests/mahesh_anna.jpg";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "./Footer/Footer";
// import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=848784ea314f4eb2a4544e909b40c2cc&q=india`
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
        ` https://newsapi.org/v2/top-headlines?apiKey=848784ea314f4eb2a4544e909b40c2cc&q=sports`
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
        `https://newsapi.org/v2/top-headlines?apiKey=848784ea314f4eb2a4544e909b40c2cc&q=Business`
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
        `https://newsapi.org/v2/top-headlines?apiKey=848784ea314f4eb2a4544e909b40c2cc&q=science`
      )
      .then((res) => {
        // console.log(res.data.articles[0].title)
        setTechnology(res.data.articles);
      });
  };

  useEffect(() => {
    technologyData();
  }, []);

  return (
    <>
      <div>
        {data.slice(0, 1).map((el) => {
          return (
            <div>
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
            <div key={el.id}>
              <img className="main_img_1" src={rama} alt="ayodya" />
              <p className="rama_content">Who Is Ram? Defining The Enigma</p>
              <p className="rama_content_2">
                Millions, who may not agree with Ram’s ideals, engage with his
                story, which calls upon them to confront their own behaviour
                Ravan went up in flames that evening at Gandhi Maidan in Patna.
                This was many, many years ago. A stampede ens­ued. That was the
                only time I went to witness this violent act.
              </p>
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
          {technology.slice(0, 1).map((el) => {
            return (
              <div key={el.id} className="tech_card">
                <p className="img_title">
                  Concerns Over Health Ministry’s Scheme For Ukraine–Returned
                  Students As It Mirrors Route Taken By Unscrupulous Agents
                </p>
                <div className="tech_flex">
                  <p>
                    Union Health Ministry’s Academic Mobility Programme (AMP)
                    for Indian medical students who had to leave their studies
                    midway due to the Ukraine-Russia war earlier this year begs
                    scrutiny. Much before the government’s approval for the AMP,
                  </p>
                  <img className="tech_img" src={protest} alt="url" />
                </div>
                <hr />
                <div className="flex_part_money">
                  <div className="three_items">
                    <img src={car_img} alt="car" />
                    <p>​​Tata Launches Tiago EV In India: Check Price, Specs</p>
                  </div>
                  <div className="three_items">
                    <img src={download} alt="car" />
                    <p>
                      The last week was quite an eventful period for Ambuja
                      Cements. The company’s stock hit an all-time high of
                      ₹585.45 on September 20 and has since then declined 14 per
                      cent.
                    </p>
                  </div>
                  <div className="three_items">
                    <img src={gst} alt="car" />
                    <p>
                      Govt Working On Decriminalising Certain Offences Under
                      GST, Lower Compounding Charges
                    </p>
                  </div>
                </div>
                {/* <div className="tech_content"><p>{el.content}</p></div> */}
              </div>
            );
          })}
        </div>
      </div>
      {/* technology end */}
      <div>
        <hr />

        {<h1>Crypto</h1>}
        <div className="grid_divs">
          <div>
            <img src={money1} alt="money" />
            <h3 className="data">
              Latest Crypto News: ED Freezes Bitcoins Worth Rs 12.83 Crore In
              Mobile App Fraud; KoinX Acquires Crypto Kanoon
            </h3>
            <p className="paragraph">
              The following are some of the developments in the crypto space
              over the past few days.
            </p>
          </div>
          <div>
            <img src={money2} alt="money" />
            <h3 className="data">
              Latest Crypto News: ED Freezes Bitcoins Worth Rs 12.83 Crore In
              Mobile App Fraud; KoinX Acquires Crypto Kanoon
            </h3>
            <p className="paragraph">
              The following are some of the developments in the crypto space
              over the past few days.
            </p>
          </div>
          <div>
            <img src={money3} alt="money" />
            <h3 className="data">
              Latest Crypto News: ED Freezes Bitcoins Worth Rs 12.83 Crore In
              Mobile App Fraud; KoinX Acquires Crypto Kanoon
            </h3>
            <p className="paragraph">
              The following are some of the developments in the crypto space
              over the past few days.
            </p>
          </div>
          <div>
            <img src={money4} alt="money" />
            <h3 className="data">
              Latest Crypto News: ED Freezes Bitcoins Worth Rs 12.83 Crore In
              Mobile App Fraud; KoinX Acquires Crypto Kanoon
            </h3>
            <p className="paragraph">
              The following are some of the developments in the crypto space
              over the past few days.
            </p>
          </div>
        </div>
      </div>
      <hr />
      {<h1>ENTERTAINMENT</h1>}
      <div className="grid_divs">
        <div>
          <img src={e1} alt="money" />
          <h3 className="data">
     
            Bigg Boss 16: Salman Khan reveals new twists and turns in the reality show format
          </h3>
          <p className="paragraph">
          The handsome hunk, Salman Khan, Tuesday, September 27, attended a
            press conference in Mumbai. At the event, Bhai Jaan looked dapper in
            all black. Salman Khan opts for a black suit. In this video, we are
            showing you the changes shared by Salman Khan. Watch Video.
          </p>
        </div>
        <div>
          <img src={e2} alt="money" />
          <h3 className="data">
            Ranbir Kapoor Birthday: Brahmastra actor reveals his struggles of
            sleeping with Alia Bhatt; check his FUN and DARK secrets
          </h3>
          <p className="paragraph">
            Ranbir Kapoor is a versatile actor in Indian cinema. Today,
            September 28, the actor is celebrating his birthday, and we are
            going to tell you the fun and dark secrets of his life. Watch the
            video.
          </p>
        </div>
        <div>
          <img src={e3} alt="money" />
          <h3 className="data">Lata Mangeshkar Birth Anniversary:</h3>
          <p className="paragraph">
            Lata Mangeshkar is one of the most precious and best singers in the
            world. She has been rewarded with many awards like the Bharat Ratna,
            National Film Awards, Padma Vibhushan, Padma Bhushan, and others.
            Check out the full list of her awards.
          </p>
        </div>
        <div>
          <img src={mahesh_anna} alt="money" />
          <h3 className="data">
          RIP Indira Devi: Mahesh Babu and Namrata Shirodkar console daughter Sitara who is distraught at her grandmother's demise 
          </h3>
          <p className="paragraph">
          Mahesh Babu has suffered a double blow in a year. His mother Indira
            Devi passed away. It seems she was suffering from age-related
            ailments. In January 2022, his elder brother Ramesh Babu who was a
            producer died due to kidney issues
          </p>
        </div>
      </div>
      <hr />
      {<h1>Sports</h1>}
      <div className="sports_flex">
        <div className="s1">
          <img className="s1_img" src={s1} alt="" />
          <h2>Mendiratta Earns India's First Paris Games Quota In Shooting</h2>
          <p>
            Bhowneesh Mendiratta, however, missed a World Championship medal
            narrowly in the process, being the first to bow out.
          </p>
        </div>
        <div className="sports_grid">
          <div>
            <div className="sports_flex_1">
              <img className="s" src={s2} alt="" />
              <h3 className="s_head">
                Bumrah To Miss ICC T20 World Cup 2022: Report
              </h3>
            </div>
            <p className="paragraph1">
              Jasprit Bumrah had also missed out on the Asia Cup 2022 due to
              back spasms.
            </p>
          </div>
          <div>
            <div className="sports_flex_1">
              <img className="s" src={s3} alt="" />
              <h3 className="s_head">
                Bumrah To Miss ICC T20 World Cup 2022: Report
              </h3>
            </div>
            <p className="paragraph1">
              Jasprit Bumrah had also missed out on the Asia Cup 2022 due to
              back spasms.
            </p>
          </div>
          <div>
            <div className="sports_flex_1">
              <img className="s" src={s4} alt="" />
              <h3 className="s_head">
                Bumrah To Miss ICC T20 World Cup 2022: Report
              </h3>
            </div>
            <p className="paragraph1">
              Jasprit Bumrah had also missed out on the Asia Cup 2022 due to
              back spasms.
            </p>
          </div>
          <div>
            <div className="sports_flex_1">
              <img className="s" src={s5} alt="" />
              <h3 className="s_head">
                Bumrah To Miss ICC T20 World Cup 2022: Report
              </h3>
            </div>
            <p className="paragraph1">
              Jasprit Bumrah had also missed out on the Asia Cup 2022 due to
              back spasms.
            </p>
          </div>
          <div>
            <div className="sports_flex_1">
              <img className="s" src={s6} alt="" />
              <h3 className="s_head">
                Bumrah To Miss ICC T20 World Cup 2022: Report
              </h3>
            </div>
            <p className="paragraph1">
              Jasprit Bumrah had also missed out on the Asia Cup 2022 due to
              back spasms.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
