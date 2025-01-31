import React from 'react';
import '../App.css';

function RestaurantInfo() {
  return (
    <section className="restaurant-info" id="contact">
      <h2>Contact Us</h2>
      <p><strong>Address:</strong> 130, Near Don Bosco School, Shankar Nagar, Lonavala, Pune</p>
      <p><strong>Email:</strong> <a href="mailto:dreamrestaurant@gmail.com">dreamrestaurant@gmail.com</a></p>
      <p><strong>Phone:</strong> <a href="tel:+91 9999955555">tel:+91 9999955555</a></p>
      <p><strong>Hours:</strong> Mon-Sun: 11am - 11pm</p>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151!2d144.96332!3d-37.814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzUwLjAiUyAxNDTCsDU3JzUxLjkiRQ!5e0!3m2!1sen!2s!4v1616651353455"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
}

export default RestaurantInfo;
