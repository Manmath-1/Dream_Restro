import React from "react";
import '../App.css';


const ExploreMenu = () => {
  // Categories with images
  const menuCategories = [
    { name: "Starters", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Main Course", image: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Drinks", image: "https://plus.unsplash.com/premium_photo-1684952849219-5a0d76012ed2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Desserts", image: "https://images.unsplash.com/photo-1600239448128-917653c5bf77?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
    <div className="explore-menu" id="menu">
      <h2 className="explore-title">Explore Our Menu</h2>
      <div className="menu-grid">
        {menuCategories.map((category, index) => (
          <div key={index} className="menu-card">
            <img src={category.image} alt={category.name} className="menu-image" />
            <h3 className="menu-name">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
