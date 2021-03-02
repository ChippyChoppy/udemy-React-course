import React from 'react';
import unsplash from '../api/unsplash.js'
import SearchBar from './SearchBar.js'
import ImageList from './ImageList'

class App extends React.Component {
    state = {
        imagesArray: []
    }

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }, 
        })
        this.setState({ imagesArray: response.data.results })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }} >
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.imagesArray}/>
            </div>
        )
    }
}

export default App