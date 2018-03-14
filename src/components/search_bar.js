import React, {Component} from 'react';


class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value = {this.state.term}
                    placeholder=" Search Here..."
                    onChange={e => this.onInputChange(e.target.value)}/>
            </div>
        )
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
        console.log(term);
    }

}

export default SearchBar;