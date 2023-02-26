import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitle from './../shared/Subtitle';
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return <>
  {/* ==========Hero Section Start============= */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle Subtitle={'Know Before You Go'}/>
                  <img src={worldImg} alt="" />
            </div>
            <h1>Travelling Opens the door to Creating <span className="highlight">Memories</span></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus deleniti, enim aspernatur quae voluptatum, vel sit accusamus mollitia aliquam animi nesciunt incidunt quaerat. Suscipit assumenda minus rerum aspernatur sunt consequuntur.</p>
            
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box">
              <img src={heroImg} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-4" >
              <video src={heroVideo} alt="" controls />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
          </div>
        </Col>
        <SearchBar />
      </Row>
    </Container>
  </section>
  {/* ==========Hero Section Start============= */}

  <section>
    <Container>
      <Row>
        <Col lg='3'>
        <h5 className="services__subtitle">What We Serve</h5>
        <h2 className='services__title'>We Offer our best services</h2>
        </Col>
        <ServiceList />
      </Row>
    </Container>
  </section>

  {/* ==========Features Tour Section Start============= */}
  <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <Subtitle Subtitle={'Explore'}/>
          <h2 className="featured__tour-title">Our Featured Tours</h2>
        </Col>
        <FeaturedTourList />
      </Row>
    </Container>
  </section>

  {/* ==========Features Tour Section End============= */}
   {/* =========Experience Section start============= */}
   <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="experience__content">
            <Subtitle  Subtitle ={'Experience'}/>
            <h2>With Our All Experience <br/>we will serve you</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, vero inventore beatae possimus dignissimos ab ratione omnis perspiciatis tempore laudantium voluptates, officiis labore modi reiciendis corporis neque magni vel tenetur!</p>
          </div>
          <div className="counter__wrapper d-flex align-items-center gap-5">

            <div className="counter__box">
              <span>12k+</span>
              <h6>Successfull Trip</h6>
            </div>
            <div className="counter__box">
              <span>2k+</span>
              <h6>Regular Clients</h6>
            </div>
            <div className="counter__box">
              <span>15</span>
              <h6>Years Experience</h6>
            </div>
          </div>
        </Col>
        <Col lg='6'>
          <div className="experience__img">
            <img src={experienceImg} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
   </section>
   {/* =========Experience Section end============= */}

{/* =========Gallery Section Start============= */}
<section>
  <Container>
    <Row>
      <Col lg='12'>
        <Subtitle Subtitle={'Gallery'}/>
        <h2 className="gallery__title">Visit Our Customers Tour Gallery</h2>
      </Col>
      <Col lg='12'>
      <MasonryImagesGallery />
      </Col>
    </Row>
  </Container>
</section>
{/* =========Gallery Section End============= */}

{/* =========Testimonial Section start============= */}
<section>
  <Container>
    <Row>
    <Col lg='12'>
    <Subtitle Subtitle={'Fans Love'}/>
    <h2 className="testimonial__tile">What Our Fans Say About us </h2>
    </Col>
    <Col lg='12'> 
    <Testimonials />
    </Col>
    </Row>
  </Container>
</section>
{/* =========Testimonial Section End============= */}
<Newsletter />

  </>
}

export default Home
