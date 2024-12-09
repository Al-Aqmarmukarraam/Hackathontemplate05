import React from 'react';
import Header from './components/Navbar';
import Header2 from './components/Header2';
import Hero from './components/Hero';
import  EditorsPick from './components/EditorsPick';
import Whitediv from './components/whitediv';
//import ProductCard from './components/ProductCard';
import CardText from './components/CardsText';
 import Footer from './components/Footer';
import Greendiv from './components/greendiv';




const page = () => {
  return (<div className='w-[1440px] h-[1440px] bg-white'>
    <div><Header/></div>

    
      <Header2/>
      <Hero/>
      <EditorsPick/>
/
       
       <CardText/>
      <Greendiv/>
      <Whitediv/>
    <Footer/>
    
  </div>)
}

export default page