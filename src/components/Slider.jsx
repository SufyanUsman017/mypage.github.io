import React from "react";
import "./Slider.css";

export default function Slider() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Tourist">Tourest</a>
          </li>
          <li>
            <a href="#PLaces">Places</a>
          </li>
          <li>
            <a href="#Beaches">Beaches</a>
          </li>
          <li>
            <a href="#Information">Foods</a>
          </li>
        </ul>
      </header>
{/* **********************Search********************************************************************** */}

      <div className="img">
        <div className="search">
          <input type="search" placeholder="search" />
        </div>
        <div className="searchbtn">
          <button>Search</button>
        </div>
      </div>
{/* **********************Maldiv********************************************************************** */}


      <section id="Tourist">
        <h1 style={{ textAlign: "center" }}>Maldives</h1>
      </section>
      <div className="card-container">
        <div className="card">
          <button className="btn">more..</button>
        </div>

        <div className="card1">
          <button className="btn">more..</button>
        </div>

        <div className="card2">
          <button className="btn">more..</button>
        </div>

        <div className="card3">
          <button className="btn">more..</button>
        </div>
      </div>

{/* **********************Breaches********************************************************************** */}
<section id="Breaches">
      <h1 style={{ textAlign: "center" }}>Breaches</h1>
      <div className="cards-container">
        <div className="cards">
         
        </div>

        <div className="cards1">
          
        </div>

        <div className="cards2">
          
        </div>

        <div className="cards3">
         
        </div>
      </div>
      </section>
      {/* **********************Food********************************************************************** */}

<section id="Foods">
        <h1 style={{ textAlign: "center" }}>Foods</h1>
      </section>
      <div className="cardf-container">
        <div className="cardf">
         
        </div>

        <div className="cardf1">
          
        </div>

        <div className="cardf2">
          
        </div>

        <div className="cardf3">
         
        </div>
      </div>


{/* **********************Tourist********************************************************************** */}


      <section id="Tourist">
        <h1 style={{ textAlign: "center" }}>Tourist</h1>
        <div className="main-tourist">
          <div className="guidlines">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quo neque dignissimos recusandae ipsa nobis, rerum nam
              non odio corrupti iusto excepturi in beatae reiciendis totam
              voluptas quod adipisci rem. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Perferendis quo neque dignissimos recusandae
              ipsa nobis, rerum nam non odio corrupti iusto excepturi in beatae
              reiciendis totam voluptas quod adipisci rem. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Sequi minima eveniet
              numquam nulla esse cumque, veritatis ipsum aspernatur minus labore
              sint nesciunt odio quibusdam dolore voluptates cupiditate! At,
              numquam molestiae? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Perferendis quo neque dignissimos recusandae
              ipsa nobis, rerum nam non odio corrupti iusto excepturi in beatae
              reiciendis totam voluptas quod adipisci rem.
            </p>
          </div>
          <div className="facalities">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quo neque dignissimos recusandae ipsa nobis, rerum nam
              non odio corrupti iusto excepturi in beatae reiciendis totam
              voluptas quod adipisci rem. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Sequi minima eveniet numquam nulla
              esse cumque, veritatis ipsum aspernatur minus labore sint nesciunt
              odio quibusdam dolore voluptates cupiditate! At, numquam
              molestiae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Perferendis quo neque dignissimos recusandae ipsa nobis,
              rerum nam non odio corrupti iusto excepturi in beatae reiciendis
              totam voluptas quod adipisci rem. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Sequi minima eveniet numquam nulla
              esse cumque, veritatis ipsum aspernatur minus labore sint nesciunt
              odio quibusdam dolore voluptates cupiditate! At, numquam
              molestiae?
            </p>
          </div>
        </div>
      </section>





     

      





    </div>
  );
}
