import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimatedCursor from "react-animated-cursor"
// import { CiMenuBurger } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

import Man from './assets/man.png'
import Work1 from './assets/work-1.svg'
import Work2 from './assets/work-2.svg'
import Work3 from './assets/work-3.svg'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Aos from 'aos'
import { GoArrowUp } from "react-icons/go";



function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    Aos.init({duration: 1000})
  },[])

  const top = () => {window.scrollTo(0, 0)}

  return (
    <>
    
      <div className="App">
        <AnimatedCursor  />
        
      </div>

      <header>
        <div className="container">
          <div className="header_box">
            <div className="header_box_free ">
              <h3 className='menu menu_h3'>{count}</h3>
              <button onClick={() => setCount(pre => pre + 1)}>
                <IoCartOutline className='menu'/>

              </button>
            </div>
            <div className="header_box_link saidbar">
              <a href="#works">Works</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section  className="logo">
          <div className="container">
            <div className="logo_box"
              // data-aos="fade-right"
              // data-aos-offset="300"
              // data-aos-easing="ease-in-sine"
     >

              <div className="logo_text" data-aos="fade-up"
              data-aos-duration="3000">
                <h1>Hi, I am John, Creative Technologist</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <button>Download Resume</button>
              </div>
               
                <img    src={Man} alt=""  
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
     ></img>
             

            </div>
          </div>
        </section>

        <section id='works' className="paragriph">
          <div className="container">
            <div className="paragriph_box">
              <div className="paragriph_star">
                <h3>Recent posts</h3>
                <h4>View all</h4>
              </div>

              <div className="paragriph_cards">
                <div className="paragriph_card">
                  <h3>Making a design system from scratch</h3>
                  <span className='paragriph_card_span'>12 Feb 2020 <p>|</p> Design, Pattern </span>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <div className="paragriph_card">
                  <h3>Creating pixel perfect icons in Figma</h3>
                  <span className='paragriph_card_span'>12 Feb 2020 <p>|</p> Design, Pattern </span>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='blog'  className="work">
          <div className="container">
            <h3 className='work_h3'>Featured works</h3>
            <div className="work_box">
              <div className="work_par">
                <img src={Work1} alt="" />
                <div className="work_text">
                  <h2>Designing Dashboards</h2>
                  <span className='work_text_span'><h4>2020</h4> <h3>Dashboard</h3></span>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
              </div>

              <div className="row_first"></div>
              <div className="work_par">
                <img src={Work2} alt="" />
                <div className="work_text">
                  <h2>Vibrant Portraits of 2020</h2>
                  <span className='work_text_span'><h4>2018</h4> <h3>Illustration</h3></span>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
              </div>
              <div className="row_first"></div>
              <div className="work_par">
                <img src={Work3} alt="" />
                <div className="work_text">
                  <h2>36 Days of Malayalam type</h2>
                  <span className='work_text_span'><h4>2018</h4> <h3>Typography</h3></span>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
              </div>
              <div className="row_first"></div>

            </div>
          </div>
        </section>
      </main>


      <footer id='contact'>
        <div className="container">
          <div className="footer_imgs">
            <FaFacebookSquare />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
          <div className="footer_par">
            <p>Copyright ©2020 All rights reserved </p>
          </div>
        </div>
      </footer>

    <button onClick={top} className='bactop' id='#'><GoArrowUp /></button>
    </>
  )
}

export default App


// const [count, setCount] = useState(0)

{/* <h1>Count {count}</h1> */}

{/* <button onClick={() => setCount(per => per + 1)}>+</button>
<button onClick={() => setCount(per => per - 1)}>-</button> */}
