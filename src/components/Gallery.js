import React from "react";

export default class Gallery extends React.Component {
  state = {
    viewImage: null
  };

  setViewImage = (viewImage = null) => {
    this.setState({
      viewImage
    });
  };

  renderImage() {
    return (
      <div className="row-container" draggable="false">
          <img onClick={() => this.setViewImage("pic1.jpg")} src={"./pic1.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic2.jpg")} src={"./pic2.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic3.jpg")} src={"./pic3.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic4.jpg")} src={"./pic4.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic5.jpg")} src={"./pic5.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic6.jpg")} src={"./pic6.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic7.jpg")} src={"./pic7.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic8.jpg")} src={"./pic8.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic9.jpg")} src={"./pic9.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic10.jpg")} src={"./pic10.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic11.jpg")} src={"./pic11.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic12.jpg")} src={"./pic12.jpg"} draggable="false" className="thumbnail" alt=""/>
      </div>
    );
  }

  render() {
    if (this.state.viewImage) {
      return (
        <div className="viewContainer" onClick={() => this.setViewImage(null)} draggable="false">
          <img src= {this.state.viewImage} draggable="false" className="viewImage" alt=""/>
          <div className="Text">PRESS AGAIN TO GO BACK</div>
        </div>
      );
    }

    return <div>{this.renderImage()}</div>;
  }
}
