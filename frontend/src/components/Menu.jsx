import React, { useState } from "react";
import "../App.css";

const Menu = ({ order, setOrder, setBill }) => {
  // Menu items with prices
  const menuItems = {
    Starter: { Soup: 5, Salad: 7, MasalaPapad: 5, SpringRolls: 8 },
    "Main Course": { Pasta: 12, Steak: 20, Burger: 10, Pizza: 15 },
    Drinks: { Soda: 3, Coffee: 4, Lemonade: 5, Milkshake: 7 },
    Dessert: { Cake: 6, IceCream: 4, Brownie: 8, Pudding: 6 },
  };

  // State for search and filter
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Add item to order and update the bill
  const addToOrder = (category, item, price) => {
    const existingItemIndex = order.findIndex((orderItem) => orderItem.item === item);

    if (existingItemIndex > -1) {
      // If the item already exists in the order, increase its quantity
      const updatedOrder = [...order];
      updatedOrder[existingItemIndex].quantity += 1;
      setOrder(updatedOrder);
    } else {
      // Add the item to the order with quantity 1
      const newOrder = [...order, { category, item, price, quantity: 1 }];
      setOrder(newOrder);
    }
    setBill((prevBill) => prevBill + price);
  };

  // Filtered menu items based on search term and selected category
  const filteredMenu = Object.entries(menuItems).reduce((acc, [category, items]) => {
    if (selectedCategory !== "All" && selectedCategory !== category) {
      return acc;
    }
    const filteredItems = Object.entries(items).filter(([item]) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredItems.length > 0) {
      acc[category] = Object.fromEntries(filteredItems);
    }
    return acc;
  }, {});

  return (
    <div className="menu" id="menu">
      <h3>Menu</h3>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search for a dish..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="menu-search"
      />

      {/* Filter by category */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="menu-filter"
      >
        <option value="All">All Categories</option>
        {Object.keys(menuItems).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Display menu items */}
      {Object.entries(filteredMenu).map(([category, items]) => (
        <div key={category} className="menu-category">
          <h4>{category}</h4>
          <div className="menu-items">
            {Object.entries(items).map(([item, price]) => (
              <button
                key={item}
                onClick={() => addToOrder(category, item, price)}
                className="menu-item"
              >
                {item} (₹{price})
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
