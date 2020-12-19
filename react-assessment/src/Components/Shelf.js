const Shelf = props => {
    let mappedTitles = props.shelf.map((book, index) => (
        <p key={index}>{book}</p>
    ))
    return (
        <section className="shelf">
            <h3>Your Shelf</h3>
            <button onClick={() => props.clearShelf()}> Clear</button>
            {mappedTitles}
        </section>
    )
}

export default Shelf;