
import React from 'react';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import TypeOfEvents from './Components/TypeOfEvents';
import ContactUs from './Components/ContactUs';
// import InitialLogo from './Components/InitialLogo';
import Navbar from './Components/Navbar';
import {Route, Routes} from 'react-router-dom';
import CarouselSlider from './Components/CarouselSlider';





const App =()=>{
 
  const randomUserObj= 
    {imgVar : 'https://media.istockphoto.com/photos/royal-crown-logo-picture-id802318150?k=20&m=802318150&s=612x612&w=0&h=BRWgpOWgAwoS7e-9dQ3-anU2UwF4Uwg-DG32y2l94Gs=' }

          console.log("r",randomUserObj.imgVar)
  return(
    <div>
    <Navbar /> 

    < CarouselSlider />
    <h1> Royalist </h1>
    <Routes>
     <Route exact path='/home' element={<Home imgVar={randomUserObj.imgVar} /> } /> 
      <Route  path='/aboutus' element={<AboutUs />} />
     <Route  path='/typeOfEvents' element={<TypeOfEvents />} />
     <Route  path='/contactus' element={<ContactUs />} /> 
 </Routes>
    
    </div>
  )
}
export default App;








// <div>
// {/* <Navbar /> */}
// {/* <InitialLogo /> */}
// < Carousell />
// <Routes>
// {/* 
//     <Route exact path='/home' element={<Home imgVar={randomUserObj.imgVar} /> } /> */}
//     {/* <Route  path='/aboutus' element={<AboutUs />} />
//     <Route  path='/typeOfEvents' element={<TypeOfEvents />} />
//     <Route  path='/contactus' element={<ContactUs />} /> */}
//   </Routes>
//   </div>
// <h1>hiapp is working</h1>





