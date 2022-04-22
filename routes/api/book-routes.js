// require router
const router = require('express').Router();
// require fs
const fs = require('fs');
// require path
const path = require('path');
// require JSON data file
const { books } = require('../../data/books.json');

// helper functions
const addBook = (body, dataArray) => {
    const book = body;
    dataArray.push(book);
    // use synchronous fs writeFile function for small data set
    fs.writeFileSync(
        path.join(__dirname, '../../data/books.json'),
        JSON.stringify( { books: dataArray }, null, 2)
    );
    return book;
};

// CRUD routes
// get all books at api/books endpoint
router.get('/', (req,res) => {
    res.json(books);
});

router.post('/', (req,res) => {
    const newBook = addBook(req.body, books);
    res.json(newBook);
})

// export router
module.exports = router;
