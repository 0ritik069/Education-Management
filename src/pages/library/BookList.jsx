import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "JavaScript Basics", author: "John Doe", category: "Programming" },
    { id: 2, title: "Learn React", author: "Jane Smith", category: "Web Development" },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      setBooks(books.filter((book) => book.id !== id));
      console.log(`Book with ID ${id} deleted.`);
    }
  };

  return (
    <Layout>
      <div className="page-header d-flex justify-content-between align-items-center mb-4">
        <h4 className="page-title">Library Books</h4>
        <Link to="/library/books/add" className="btn btn-primary">
          + Add Book
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>
                  <Link
                    to={`/library/books/edit/${book.id}`}
                    className="btn btn-sm btn-info me-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(book.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default BookList;
