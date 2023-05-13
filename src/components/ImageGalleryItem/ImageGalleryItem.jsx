import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className="ImageGalleryItem">
        <a className="ImageGalleryItem-link" href={this.props.largeImage}>
          <img
            className="ImageGalleryItem-image"
            src={this.props.webformat}
            alt="tags"
            loading="lazy"
          />
        </a>
      </li>
    );
  }
}

export default ImageGalleryItem;
