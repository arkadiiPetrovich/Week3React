import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from "axios";
import '../App.css';

function UpdateBookInfo(props) {
    const [book, setBook] = useState({
        title: '',
        isbn: '',
        author: '',
        description: '',
        published_date: '',
        publisher: '',
    });

    const { id } = useParam();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .getUri('http://localhost:8082/api/books/${id}')
            .then((res) => {
                setBook({
                    title: res.data.title,
                    isbn: res.data.isbn,
                    author: res.data.author,
                    description: res.data.description,
                    published_date: res.data.published_date,
                    publisher: res.data.publisher,
                });
            })
            .catch((err) => {
                console.log('Error from UpdateBookInfo');
            });
    }, [id]);

    const onChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: book.title,
            isbn: book.isbn,
            author: book.author,
            description: book.description,
            published_date: book.published_date,
            publisher: book.publisher,
        };

        axios
            .put('http://localhost:8082/api/books/${id}', data)
            .then((res) => {
                navigate('/show-book/${id}');
            })
            .catch((err) => {
                console.log('Error on UpdateBookInfo');
            });
    };

    return (
        <div className='UdateBookInfo'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <br />
                        <Link to='/' className='btn btn-outline-warning float-left'>
                            Show Book List
                        </Link>
                    </div>
                    <div className='col-8-md m-auto'>
                        <h1 className='display-4 text-center'>Edit Bool</h1>
                        <p className='lead text-ceter'>Update BoOk'S Info</p>
                    </div>
                </div>

                <div className='col-md-8 m-auto'>
                    <form noValidate onSubmit={onSubmit}>
                        <div className='form-group'>
                            <label htmlFor='title'>Title</label>
                            <inpur 
                                type='text'
                                placeholder='Title of the Book'
                                name = 'title'
                                className = 'form-control'
                                value={book.title}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='isbn'>ISBN</label>
                            <inpur
                                type='text'
                                placeholder='ISBN'
                                name ='isbn'
                                className='form-control'
                                value={book.isbn}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='author'>Author</label>
                            <input
                                type='text'
                                placeholder='Author'
                                name='author'
                                className='form-conrol'
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='description'>Descriprion</label>
                            <textarea
                                type='text'
                                placeholder='Description of the Book'
                                name='description'
                                className='form-control'
                                value={book.description}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='published_date'>Published Date</label>
                            <input
                                type ='text'
                                placeholder='Published Date'
                                name='published_date'
                                className='form-control'
                                value={book.published_date}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='publisher'>Publisher</label>
                            <input
                                type='text'
                                placeholder='Publisher of the book'
                                name='publisher'
                                className='form-control'
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <button
                            type='submit'
                            className='btn btn-outline-info btn-lg btn-block'
                        >
                            Update Book
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateBookInfo;