const express = require('express');
const MenuItem = require('../models/MenuItem'); // Correct model path
const router = express.Router();

// POST route to add a new menu item
router.post('/add', async (req, res) => {
  try {
    const { category, name, price } = req.body;

    // Create a new menu item object
    const newItem = new MenuItem({
      category,
      name,
      price
    });

    // Save the item to the database
    await newItem.save();

    res.status(201).json({
      message: 'Menu item added successfully',
      item: newItem
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding menu item', error });
  }
});

// GET route to fetch all menu items (for frontend rendering)
router.get('/', async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = {};

    // If category is provided, filter based on category
    if (category) {
      query.category = category;
    }

    // If search is provided, filter based on name (case insensitive)
    if (search) {
      query.name = new RegExp(search, 'i');
    }

    // Fetch the filtered menu items
    const menuItems = await MenuItem.find(query);

    // If no items were found, send a message
    if (menuItems.length === 0) {
      return res.status(404).json({ message: 'No menu items found' });
    }

    // Return the menu items to the frontend
    res.status(200).json(menuItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching menu items', error });
  }
});

module.exports = router;
