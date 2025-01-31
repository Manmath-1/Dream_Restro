import React from 'react';
import '../App.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          Welcome to <strong>Dream Restaurant</strong>, where culinary artistry meets exceptional service. Our chefs are dedicated to crafting dishes that delight the senses, using only the freshest ingredients.
        </p>
        <p>
          Whether you're here for a casual meal or a special celebration, we aim to provide an unforgettable dining experience in an elegant and cozy atmosphere.
        </p>
        <p>
          Join us to savor the flavors of gourmet cuisine paired with exquisite wines and a warm ambiance. We look forward to hosting you soon!
        </p>
        <img
          src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg"
          alt="About Our Restaurant"
          className="about-image"
        />
      </div>
    </section>
  );
}

export default About;
