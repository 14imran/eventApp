 import Carousel from 'react-bootstrap/Carousel';
import React from 'react'


const CarouselSlider= () => {
  return (
    <div>
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_960_720.jpg"
          alt="First slide" />
        <Carousel.Caption>
          <p>Public or private, indoor or outdoor, our passionate event experts are ready to transform your special event to create memorable moments for you and your participants. From festivals and concerts to weddings, award shows, galas and live sporting events, we’ll help you create focal points, moments of build-up, positivity, fun, and impact.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
          alt="Second slide" />
        <Carousel.Caption>
          <p>Royalist works with the full gamut of client types in the trade show and exhibits industry. We work with show organizers, associations, corporate clients, exhibitors, meeting organizers, and booth builders across the globe. Services vary based on customer needs, but all services are expert-led with strategy and execution that will exceed your expectations.  .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1340253645/photo/shot-of-an-elegantly-decorated-table-at-a-wedding-reception.webp?s=612x612&w=is&k=20&c=ltI4abZRubQgpKhFKZcTz9c0Sw0nDSATJRAlaNdOjh0="
          alt="Third slide" />
        <Carousel.Caption>
          <p>
            From keynotes to exhibit floors and breakout sessions, our team members continually look for ways to make the meeting or convention that you’re planning even better than your last. Through creative strategy and innovative technology, we also help unite both in-person and virtual audiences in inventive ways.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          alt="Fourth slide" />
        <Carousel.Caption>
          <p>In today’s ever-connected world, technology is changing the way businesses plan and conduct meetings and conventions. Hybrid meetings and conferences will be the norm for the foreseeable future. With new ways to connect and new ways to inspire: your employees, your membership, your investors, and other important stakeholders.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/business-network-concept-group-of-businessperson-teamwork-human-picture-id1299873170?k=20&m=1299873170&s=612x612&w=0&h=t014btS1_G42zjU6rayhthCQB93wfEybSjodh4yFUBU="
          alt="Fifth slide" />
        <Carousel.Caption>
          <p>Royalist provides global support for any convention and trade show services. From impactful keynote addresses to immersive exhibit booths and general service contracting, Encore is driven to reach your audience in innovative ways. Whether you need a single provider for an entire show or a flexible provider to work seamlessly with venue staff, Encore is your trusted partner.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"

          src="https://media.istockphoto.com/photos/live-internet-streaming-of-business-conference-meetingonline-webinar-picture-id1318224799?k=20&m=1318224799&s=612x612&w=0&h=YLe5ciXv9nzpk2M0oNdlDawVLPr9XMF0Y3LbNIHEmDk="
          alt="Sith slide" />
        <Carousel.Caption>
          <p>Host engaging and inspiring virtual events that will leave your virtual audience wanting more.

            Royalist has more than 10 years of experience specializing in virtual and hybrid event production. We offer a variety of professional technology, production and creative solutions to help you deliver your message to anyone, anywhere.

            Looking to create highly interactive attendee experiences? Consider using our flexible virtual event platform Chime Live..</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default CarouselSlider;




