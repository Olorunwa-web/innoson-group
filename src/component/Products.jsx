import React from 'react'
import '../styles/product.css'
import firstImg from '../assets/PmRtKHup-Innoson-G5 1.png'
import secondImg from '../assets/PmRtKHup-Innoson-G5 1 (1).png'
import thirdImg from '../assets/jincheng 1.png'
import fourthImg from '../assets/PmRtKHup-Innoson-G5 1 (2).png'

const Products = () => {
    return (
        <>
        <div className ='container my-5 big'>
              <p className ='pb-4 text-center what'>What We Do</p>
              {/* first image and text */}
              <div className = 'parent'>
                  <div className = 'd-block  d-lg-flex  justify-content-center align-items-center space'>
                      <div className = 'img-wrapper'>
                      <img src= {firstImg} alt="first-img" className = 'first-img'/>

                      </div>
                      <div className = 'auto'>
                          <h2>Automobile Manufacturing</h2>
                          <p>Innoson Vehicle Manufacturing[IVM] intoduces automotive products from China, Japan and Germany. Our product line includes heavy duty Vehicles, middle and high level buses, special enviroment friendly vehicles. The company carries out optimization design and assembly according to African road condition so as produce suitable products at affordable prices. </p>
                          <h4 className = 'btn22'>Learn more</h4>
                      </div>
                  </div>
              </div>
              {/* second image and text */}
              <div className = 'parents my-4'>
                  <div className = 'd-block  d-lg-flex justify-content-center align-items-center space'>
                      <div className = 'autos'>
                          <h2>Plastic Manufacturing</h2>
                          <p>Innoson Technical {'&'} industrial Co. Ltd manufactures high quality household and industrial plastics, health {'&'} safety accessories, storage containers, fixtures {'&'} fittings, electrical components {'&'} accessories. Plastic products manufactured include; plastic chairs, tables, trays, plates, spoons, cups, jerry cans of different sizes and many other allied products.</p>
                          <h4 className = 'btn22'>Learn more</h4>
                      </div>
                      <div className = 'img-wrapper'>
                      <img src= {secondImg} alt="seocond-img" className = 'first-img'/>
                      </div>
                  </div>
              </div>
              {/* third image and text */}
              <div className = 'parents my-4'>
                  <div className = 'd-block  d-lg-flex justify-content-center align-items-center space'>
                      <div>
                      <img src= {thirdImg} alt="first-img" className = 'first-img'/>
                      </div>
                      <div className = 'autos'>
                          <h2>Motocyle Manufacturing</h2>
                          <p>Innoson Nigeria Limited Nnewi Manufactures motocycles, tricycle, spare parts and accessories. We pioneered the first Made-in-Nigeria Motocyle brand that sold for as low N60,000. By year 2002, we successfully drove out tokunbo (foreign used) motocycles out of Nigeria forever</p>
                          <h4 className = 'btn22'>Learn more</h4>
                      </div>
                  </div>
              </div> 
              {/* fourth image and text */}
              <div className = 'parents my-4'>
                  <div className = 'd-block  d-lg-flex justify-content-center align-items-center space'>
                      <div className = 'autos'>
                          <h2>Tires and Tubes Manufacturing</h2>
                          <p>General Tyres {'&'} Tubes Co. Ltd Enugu, Manufacturers of high quality tyres {'&'} Tubes. The plant has a production capacity of about 8,000 pieces of motocycle tyres daily and 13,000 tubes daily. </p>
                          <h4 className = 'btn22'>Learn more</h4>
                      </div>
                      <div>
                      <img src= {fourthImg} alt="first-img" className = 'first-img'/>
                      </div>
                  </div>
              </div>
        </div>  
        </>
    )
}

export default Products
