const { application } = require('express');
const express = require ('express');
const { append } = require('express/lib/response');
const router = express.Router()

//Item Model
const Item = require ('../../models/Item');

// @route GET api/items
// @description GET ALL ITEMS
// @access Public 
router.get('/', (req, res) =>{
    Item.find()
        //.where ('name').equals('Осётр русский')  
        //.sort({class: 4})
        .then (items => res.json(items))
});


// @route POST api/items
// @description Create A POST
// @access Public 
router.post('/', (req, res) =>{
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});



// @route DELETE api/items/:id
// @description Delete A Item
// @access Public 
router.delete('/:id', (req, res) =>{
    Item.findById(req.params.id)
        .then (item => item.remove().then(() => res.json ({success: true}))
        )
        .catch(err => res.status(404).json({success: false}));
})


module.exports = router;