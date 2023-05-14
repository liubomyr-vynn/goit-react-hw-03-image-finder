import React, { Component } from 'react';

class Button extends Component {
  // state = {
  //   currentPage: 1,
  // };

  // handleLoadMore = () => {
  //   this.setState({ currentPage: this.state.currentPage + 1 });
  //   console.log(this.state.currentPage);
  // };

  render() {
    return (
      <div className="container">
        <button onClick={this.props.onClick} className="Button" type="button">
          Load more
        </button>
      </div>
    );
  }
}
export default Button;
