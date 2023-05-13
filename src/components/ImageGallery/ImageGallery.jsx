import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import imagesApi from '../../Services/Gallery-api';

class ImageGallery extends Component {
  state = {
    searchQuery: null,
  };

  componentDidUpdate(prevProps) {
    const prevInput = prevProps.inputValue;
    const nextInput = this.props.inputValue;

    if (prevInput !== nextInput) {
      imagesApi
        .fetchImages(nextInput)
        .then(searchQuery => this.setState({ searchQuery }));
    }
    console.log(this.state.searchQuery);
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <div>
        <ul className="ImageGallery">
          {searchQuery !== null &&
            searchQuery.hits.map(image => (
              <ImageGalleryItem
                largeImage={image.largeImageURL}
                webformat={image.webformatURL}
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default ImageGallery;
// {
//   image.previewURL;
// }
