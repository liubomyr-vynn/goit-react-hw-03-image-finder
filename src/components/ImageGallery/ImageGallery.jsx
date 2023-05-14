import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import imagesApi from '../../Services/Gallery-api';
import { nanoid } from 'nanoid';

class ImageGallery extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
    images: [],
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const prevInput = prevProps.inputValue;
    const nextInput = this.props.inputValue;
    const prevStatePage = prevState.currentPage;
    const nextStatePage = this.state.currentPage;

    if (prevInput !== nextInput) {
      this.setState({
        searchQuery: '',
        images: [],
        currentPage: 1,
      });

      imagesApi
        .fetchImages(nextInput, 1)
        .then(data => {
          const newImages = data.hits;
          this.setState({
            searchQuery: data,
            images: newImages,
          });
        })
        .catch(error => console.log(error));
    } else if (prevStatePage !== nextStatePage) {
      imagesApi
        .fetchImages(nextInput, nextStatePage)
        .then(data => {
          const newImages = data.hits;
          this.setState(prevState => ({
            searchQuery: data,
            images: [...prevState.images, ...newImages],
          }));
        })
        .catch(error => console.log(error));
    }
  }

  render() {
    const { searchQuery, images } = this.state;
    return (
      <div>
        <ul className="ImageGallery">
          {searchQuery !== '' &&
            images.map(image => (
              <ImageGalleryItem
                key={nanoid()}
                largeImage={image.largeImageURL}
                webformat={image.webformatURL}
              />
            ))}
        </ul>
        {searchQuery !== '' && <Button onChange={this.handleLoadMore} />}
      </div>
    );
  }
}

export default ImageGallery;
