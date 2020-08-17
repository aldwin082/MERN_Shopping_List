const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc GET all items
// @access PUBLIC
router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1}) //descending order
        .then(items => res.json(items));
});

// @route POST api/items
// @desc Create an item
// @access PUBLIC
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items
// @desc Delete an item
// @access PUBLIC
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => Item.remove(item).then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
})


// @route UPDATE api/items
// @desc Update an item
// @access PUBLIC
router.post('/update', (req, res) => {
  console.log(req.body)
  try {
    Item.findByIdAndUpdate(
      { _id: req.body.id}, 
      { name: req.body.name}
    )
    .then(item => res.json(item));

  } catch (err) {
    res.json({ result: "error", message : err.msg}).status(404);
  }
})

module.exports = router;