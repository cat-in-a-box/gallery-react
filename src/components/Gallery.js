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
          <img onClick={() => this.setViewImage("pic1.jpeg")} src={"./pic1.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic2.jpeg")} src={"./pic2.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic3.jpeg")} src={"./pic3.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic4.jpeg")} src={"./pic4.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic5.jpeg")} src={"./pic5.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic6.jpeg")} src={"./pic6.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic7.jpeg")} src={"./pic7.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic8.jpeg")} src={"./pic8.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic9.jpeg")} src={"./pic9.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic10.jpeg")} src={"./pic10.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic11.jpeg")} src={"./pic11.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic12.jpeg")} src={"./pic12.jpeg"} draggable="false" className="thumbnail" alt=""/>
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
