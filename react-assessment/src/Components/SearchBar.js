import { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleBookSearch(e) {
        this.setState({ input: e.target.value });
    }

    handleClick() {
        this.props.searchBooks(this.state.input);
    }

    handleClear() {
        this.props.clear();
        this.setState({ input: '' });
    }

    render() {
        return (
            <section className="search-field">
                <input value={this.state.input} type="text" onChange={e => { this.handleBookSearch(e) }} />
                <button onClick={() => this.handleClick()}>search</button>
                <button onClick={() => this.handleClear()}>clear search</button>
            </section>
        )
    }
}

export default SearchBar;