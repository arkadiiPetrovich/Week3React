const express = required('express');
const router = express.Router();

const Book = require('../../model/Books');

router.get('/test', (req,res) => res.send('book route testing!'));

router.get('/',(reg,res)=>{
    Book.find().then(books.res.json(books))
    .catch(err => res.status(404).json({nobooksfound: 'No Books Found'}));
});

module.exports = router;