import Header from './Components/Header';
import Shelf from './Components/Shelf';
import BookList from './Components/BookList';
import SearchBar from './Components/SearchBar';
import data from './data.js';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
    this.reset = this.reset.bind(this);
  }

  addToShelf(bookTitle) {
    this.setState({ shelf: [...this.state.shelf, bookTitle] });
  }

  clearShelf() {
    this.setState({ shelf: [] })
  }

  filterBooks(input) {
    let filteredBooks = this.state.books.filter(book => {
      return book.title.toLowerCase().includes(input.toLowerCase())
    })
    this.setState({ books: filteredBooks });
  }

  reset() {
    this.setState({ books: data });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section className="app-components">
          <SearchBar
            searchBooks={this.filterBooks}
            clear={this.reset} />
          <section className="book-content">
            <section className="book-display">
              <BookList
                books={this.state.books}
                addBook={this.addToShelf}
              />
            </section>
            <Shelf
              shelf={this.state.shelf}
              clearShelf={this.clearShelf} />
          </section>
        </section>
      </div>
    );
  }

}

export default App;
