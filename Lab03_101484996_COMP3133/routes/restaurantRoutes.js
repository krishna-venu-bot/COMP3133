
const express = require('express');
const router = express.Router();

const Restaurant = require('../models/Restaurant');

// 1. Get ALL restaurants
router.get('/', async (req, res) => {
    try {
        const data = await Restaurant.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// 2. Get restaurants by cuisine
router.get('/cuisine/:type', async (req, res) => {
    try {
        const data = await Restaurant.find({ cuisine: req.params.type });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// 3. Sorting by restaurant_id
router.get('/sort', async (req, res) => {
    try {
        let order = req.query.sortBy === 'DESC' ? -1 : 1;

        const data = await Restaurant.find()
            .select('cuisine name city restaurant_id')
            .sort({ restaurant_id: order });

        res.json(data);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// 4. Delicatessen and NOT Brooklyn
router.get('/Delicatessen', async (req, res) => {
    try {
        const data = await Restaurant.find({
            cuisine: 'Delicatessen',
            city: { $ne: 'Brooklyn' }
        })
        .select('-_id cuisine name city')
        .sort({ name: 1 });

        res.json(data);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;
