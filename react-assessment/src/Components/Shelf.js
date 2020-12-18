const Shelf = props => {
    let mappedTitles = props.shelf.map((book, index) => (
        <p key={index}>{book}</p>
    ))
    return (
        <section>
            {mappedTitles}
            <button onClick={() => props.clearShelf()}> Clear</button>
        </section>
    )
}

export default Shelf;