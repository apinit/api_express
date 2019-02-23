const express = require('express');
const app = express();

const books = [
    {bid: 1, bName: 'JS book'},
    {bid: 2, bName: 'Java book'},
    {bid: 3, bName: 'Angular book'}
];

app.get('/', (req, res) => {
    res.send('Hello World, First Training');
});

app.get('/api/book', (req, res) => {
    res.send(books);
});

app.get('/api/book/:id' , (req, res) => {
    const book = books.find(book => book.bid === parseInt(req.params.id));
    if(!book){
        res.status(404).send('Not Found!!!');
    }
    res.send(book);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));