
import React, { useState } from 'react';
import Footer from "../Footer/Footer";
import NavBar from '../NavBar/NavBar'
import './Styles.css';

const AboutUs = () => {
  const [photoIndex, setPhotoIndex] = useState(0); // Track active photo

  const photos = [
    // Replace with your own image URLs
   './images/sebika.png',
   './images/astuti.jpg'
  ];

  const handlePhotoChange = (direction) => {
    const newIndex = (photoIndex + photos.length + direction) % photos.length;
    setPhotoIndex(newIndex);
  };

  const renderDescription = () => {
    switch (photoIndex) {
      case 0:
        return (
          <p>
            We are a group of passionate <span className="highlight">developers</span> and <span className="highlight">designers</span> crafting impactful experiences.
          </p>
        );
      case 1:
        return (
          <p>
            Collaboration is our secret sauce. We <span className="highlight">brainstorm</span> together, <span className="highlight">build</span> with passion, and <span className="highlight">celebrate</span> every success.
          </p>
        );
      case 2:
        return (
          <p>
            We believe in the power of technology to <span className="highlight">solve problems</span> and <span className="highlight">make a difference</span> in the world. Join us on the journey!
          </p>
        );
      default:
        return null;
    }
  };



return (
  <>
   <NavBar />
  <div class="about-us-container">
 
<div class="content-wrapper">
    <div class="team-member-container" >
      <img src="./images/sebika.png" alt="Team Member 1" class="team-photo" />
      <div class="description-wrapper">
        <h2>Sebika Nepal</h2>
        <p>Meet Sebika, a standout team member whose expertise spans both algorithm implementation and frontend development. Sebika's journey with our team is characterized by a profound commitment to excellence and a passion for crafting solutions that seamlessly blend advanced algorithms with captivating user interfaces.

In the realm of algorithm implementation, Sebika is a problem-solving virtuoso. With a keen analytical mind, she navigates intricate challenges with precision, developing algorithms that not only meet the technical requirements but also elevate the overall efficiency of our projects. Sebika's dedication to staying at the forefront of algorithmic advancements ensures that our solutions are not just functional but represent the cutting edge of technological innovation.</p>
      </div>
    </div>
    <div class="team-member-container">
      <img src="./images/astuti.jpg" alt="Team Member 2" class="team-photo" />
      <div class="description-wrapper">
        <h2>Astuti Jha</h2>
        <p>
Introducing Astuti, a valued member of our team who brings a wealth of expertise to the table, particularly in the realms of backend development and Firebase implementation. Astuti's dedication to building robust backend systems and leveraging the power of Firebase technologies has been instrumental in enhancing the functionality and performance of our projects.

In the arena of backend development, Astuti stands out for her proficiency in crafting scalable and efficient server-side solutions. With a keen eye for detail and a systematic approach, she tackles complex challenges, ensuring that the backend infrastructure not only meets the current needs of our projects but is also poised for future scalability. Astuti's passion for optimizing databases, managing server logic, and ensuring seamless communication between frontend and backend components is evident in the reliability of our applications.







</p>
      </div>
    </div>  
  </div>
  <Footer />
</div>
  </>
);
};

export default AboutUs;