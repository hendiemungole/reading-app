// src/components/ReadingList.js
import React, { useState } from 'react';

const ReadingList = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');

  const addBook = () => {
    if (title.trim()) {
      setBooks([...books, title]);
      setTitle('');
    }
  };

  const removeBook = (index) => {
    const newBooks = books.filter((_, i) => i !== index);
    setBooks(newBooks);
  };

  return (
    <div>
      <h1>Reading List</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter book title"
      />
      <button onClick={addBook}>Add Book</button>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book} <button onClick={() => removeBook(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadingList;