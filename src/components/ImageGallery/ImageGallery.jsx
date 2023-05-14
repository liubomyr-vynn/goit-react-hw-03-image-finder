import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import imagesApi from '../../Services/Gallery-api';

class ImageGallery extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
  };

  componentDidUpdate(prevProps) {
    const prevInput = prevProps.inputValue;
    const nextInput = this.props.inputValue;

    if (prevInput !== nextInput) {
      imagesApi
        .fetchImages(nextInput)
        .then(searchQuery => this.setState({ searchQuery }))
        .catch(error => console.log(error));
    }
  }

  handleLoadMore = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
    console.log(this.state.currentPage);
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <div>
        <ul className="ImageGallery">
          {searchQuery !== '' &&
            searchQuery.hits.map(image => (
              <ImageGalleryItem
                largeImage={image.largeImageURL}
                webformat={image.webformatURL}
              />
            ))}
        </ul>
        {searchQuery !== '' && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}

export default ImageGallery;
