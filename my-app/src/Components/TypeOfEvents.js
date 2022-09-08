import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState} from 'react';


function TypeOfEvents(){
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedEvents, e) => {
    setIndex(selectedEvents);
  };


  return (
    
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img
        className='https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60'
        src="holder.js/800x400?text=First slide&bg=373940"
        alt='Weddings'       
         />
      <Carousel.Caption>
        <h3>Weedings</h3>
        <p>Planning services for a personalized event for 10-50 guests.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="https://images.unsplash.com/photo-1582192730841-2a682d7375f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29uZmVyZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60"
        src="holder.js/800x400?text=Second slide&bg=282c34"
        alt="conferences"
      />

      <Carousel.Caption>
        <h3>Anywhere and anytime\</h3>
        <p>Simple, modern meeting facility with guest suites & summer group-housing accommodations. </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGp8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60"
        src="holder.js/800x400?text=Third slide&bg=20232a"
        alt="DJ Party"
      />

      <Carousel.Caption>
        <h3>Fun and dance</h3>
        <p>
          We are ready for all occasions and holidays.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    

  </Carousel>
  
  );
}

export default TypeOfEvents; 
