import React,{useEffect} from 'react'
import '../css/Hero.css'
import heroImg from '../assets/bg1.jpg'
import AOS from 'aos'
// import 'aos/dist/aos.css'

const Hero = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    // data-aos="fade-left" data-aos="fade-right"
    <section>
      <div className="left" data-aos="fade-right">
        <h1>
          {" "}
          <span className="heroSpan">DCL</span> Gravisolution
        </h1>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
          esse? Praesentium deserunt quidem nisi volup quae nemo, iste veniam
          mollitia safsgfwse fwsefesgds .
        </h3>

        <div className="btncontainer">
          <button className="btn">Follow Us</button>
        </div>
      </div>
      <div className="right" data-aos="fade-left">
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
}

export default Hero
