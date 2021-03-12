const express = require('express');
const router = express.Router();

const Grocery = require('../models/groceries');

// Retrieve grocery list
router.get('/groceries', (req, res) => {
    Grocery.find((err, groceries) => {
        if(err)
        {
            res.json({msg: 'Failed to get grocery list due to error: ' + err + '.'});
        }
        else
        {
            res.json(groceries);
        }
    })
});

// Add grocery to grocery list
router.post('/grocery', (req, res, next) => {
    let newGrocery = new Grocery({
        name: req.body.name,
        quantity: req.body.quantity,
        description: req.body.description
    });

    newGrocery.save((err, grocery) => {
        if(err)
        {
            res.json({msg: 'Failed to add grocery due to error: ' + err + '.'});
        }
        else
        {
            res.json({msg: 'Grocery added successfully.'});
        }
    })
});

// Delete grocery from grocery list
router.delete('/grocery/:id', (req, res, next) => {
    Grocery.remove({_id: req.params.id}, (err, result) => {
        if(err)
        {
            res.json({msg: 'Failed to remove grocery due to error: ' + err + '.'});
        }
        else
        {
            res.json({msg: 'Grocery removed successfully.'});
        }
    });
});

module.exports = router;