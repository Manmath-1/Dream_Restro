import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import RestaurantInfo from './components/RestaurantInfo';
import ExploreMenu from './components/ExploreMenu';
import TableSelection from './components/TableSelection';
import Menu from './components/Menu';
import Bill from './components/Bill';
import Footer from './components/Footer';

function ContactUsButton() {
  return (
    <a
      href="mailto:dreamrestaurant@gmail.com"
      className="contact-us-button"
      title="Contact Us"
    >
      📧
    </a>
  );
}

function App() {
  const [tableNo, setTableNo] = useState(null);
  const [order, setOrder] = useState([]);
  const [bill, setBill] = useState(0);

  const clearTable = () => {
    alert(`Table ${tableNo} has been cleared!`);
    setTableNo(null);
    setOrder([]);
    setBill(0);
  };

  return (
    <div>
      <Navbar />
      <HeroSection />
      {!tableNo ? (
        <>
          <ExploreMenu />
          <TableSelection setTableNo={setTableNo} />
        </>
      ) : (
        <>
          <Menu order={order} setOrder={setOrder} setBill={setBill} />
          <Bill order={order} bill={bill} clearTable={clearTable} />
        </>
      )}
      <About />
      <RestaurantInfo />
      <Footer />
      <ContactUsButton />
    </div>
  );
}

export default App;
