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
          <img onClick={() => this.setViewImage("pic1-progressive.jpeg")} src={"./pic1-progressive.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic2-progressive.jpeg")} src={"./pic2-progressive.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic3-progressive.jpeg")} src={"./pic3-progressive.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic4-progressive.jpeg")} src={"./pic4-progressive.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic5-progressive.jpeg")} src={"./pic5-progressive.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic6-progressive.jpeg")} src={"./pic6-progressive.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic7-progressive.jpeg")} src={"./pic7-progressive.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic8-progressive.jpeg")} src={"./pic8-progressive.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic9-progressive.jpeg")} src={"./pic9-progressive.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic10-progressive.jpeg")} src={"./pic10-progressive.jpe"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic11-progressive.jpeg")} src={"./pic11-progressive.jpeg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic12-progressive.jpeg")} src={"./pic12-progressive.jpeg"} draggable="false" className="thumbnail" alt=""/>
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
