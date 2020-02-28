import React, { PureComponent } from "react";

const images = [
  ["pic4", "pic10", "pic3", "pic12"],
  ["pic5", "pic6", "pic7", "pic1"],
  ["pic9", "pic2", "pic8", "pic11"]
];

class Gallery extends PureComponent {
  state = {
    viewImage: null
  };

  setViewImage = (viewImage = null) => {
    this.setState({
      viewImage
    });
  };

  renderImage(arr) {
    return (
      <div className="row-container">
        {arr.map((key, i) => (
          <img onClick={() => this.setViewImage(key)} src={`../${key}.png`} alt={key} key={i} draggable="false" className="thumbnail"/>
        ))}
      </div>
    );
  }

  render() {
    if (this.state.viewImage) {
      return (
        <div className="view__container" onClick={() => this.setViewImage(null)}>
          <img src={`../${this.state.viewImage}.png`} alt={this.state.viewImage} draggable="false" className="view__image"/>
        </div>
      );
    }

    return <div>{images.map(row => this.renderImage(row))}</div>;
  }
}

export default Gallery;
