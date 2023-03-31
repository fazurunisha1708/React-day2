import React from 'react'
import img1 from "../Images/31.webp";
import img2 from "../Images/32.jpg";
import img3 from "../Images/33.jpg"
import img4 from "../Images/34.webp";
import img5 from "../Images/35.avif"
import img6 from "../Images/36.avif"
import img7 from "../Images/37.jpg"
import img8  from "../Images/38.jpg"
import "../Components/Card.css"

export default function Card() {
  return (
    <section id='header3'>
    <div className='divmain'>
     <div className='product'>
        <img src={img1} alt="" />
        <h2>HAIR STRAIGHTENING</h2>
        <h2>Price : $100</h2>
        
      <a href='' className='btn'>Book Now</a>
     </div>
     <div className='product1'>
        <img src={img2} alt="" />
        <h2>HAIR CUT</h2>
        <h2>Price : $200</h2>
        
      <a href='' className='btn'>Book Now</a>
     </div>
     <div className='product2'>
        <img src={img3} alt="" />
        <h2>SAREE DRAPING</h2>
        <h2>Price : $50</h2>
        
      <a href='' className='btn'>BOOK Now</a>
     </div>
     <div className='product3'>
        <img src={img4} alt="" />
        <h2>FACIAL</h2>
        <h2>Price : $75</h2>
       
      <a href='' className='btn'>Book Now</a>
     </div>
    </div>



    <div className='divmain'>
     <div className='product'>
        <img src={img5} alt="" />
        <h2>THREADING</h2>
        <h2>Price : $500</h2>
        
      <a href='' className='btn'>Book Now</a>
     </div>
     <div className='product1'>
        <img src={img6} alt="" />
        <h2>MANICURE</h2>
        <h2>Price : $200</h2>
      
      <a href='' className='btn'>Book Now</a>
     </div>
     <div className='product2'>
        <img src={img7} alt="" />
        <h2>PEDICURE</h2>
        <h2>Price : $20</h2>
       
      <a href='' className='btn'>BOOK Now</a>
     </div>
     <div className='product3'>
        <img src={img8} alt="" />
        <h2>BRIDAL LOOK</h2>
        <h2>Price : $3500</h2>
   
      <a href='' className='btn'>Book Now</a>
     </div>

    </div>
    </section>
  )
}
