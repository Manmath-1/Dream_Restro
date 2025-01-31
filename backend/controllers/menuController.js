const MenuItem = require('../models/MenuItem'); // Import the MenuItem model

// Controller for fetching all menu items
const getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find(); // Fetch all menu items from the database
        res.status(200).json(menuItems); // Return the menu items as a JSON response
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve menu items', error });
    }
};

// Controller for creating a new menu item
const createMenuItem = async (req, res) => {
    const { name, description, price, category, image } = req.body; // Destructure the incoming request data
    if (!name || !description || !price || !category || !image) {
        return res.status(400).json({ message: 'All fields are required' }); // Validate if any required field is missing
    }

    try {
        const newMenuItem = new MenuItem({ name, description, price, category, image });
        await newMenuItem.save(); // Save the new menu item to the database
        res.status(201).json(newMenuItem); // Return the created item as a JSON response
    } catch (error) {
        res.status(500).json({ message: 'Failed to add menu item', error });
    }
};

module.exports = { createMenuItem, getMenuItems };
