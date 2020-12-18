const BookList = props => {
    let mappedBooks = props.books.map((book, index) => {
        return <section key={index}>
            <img src={book.img} alt={book.title} onClick={() => props.addBook(book.title)} />
            <p>{book.title}</p>
            <p>{book.author}</p>
        </section>
    }) 
    return (
        <section className="books">
            {mappedBooks}
        </section>
    )
}

export default BookList;