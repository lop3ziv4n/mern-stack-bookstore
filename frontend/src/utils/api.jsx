import axios from 'axios';

const URL = `http://localhost:5000/api/books`;

const getBookById = async (id) => await axios.get(`${URL}/${id}`);

const getBooks = async () => await axios.get(URL);

const deleteBook = async (id) => await axios.delete(`${URL}/${id}`);

const updateBook = async (book) => await axios.put(`${URL}/${book.id}`,
    {
        title: book.title,
        description: book.description,
        author: book.author,
        ratings: book.ratings,
        reviews: book.reviews,
        price: book.price,
        front_page: book.frontPage
    }
);

const createBook = async (book) => await axios.post(`${URL}`,
    {
        title: book.title,
        description: book.description,
        author: book.author,
        ratings: book.ratings,
        reviews: book.reviews,
        price: book.price,
        front_page: book.frontPage
    }
);

export {getBookById, getBooks, deleteBook, updateBook, createBook};
