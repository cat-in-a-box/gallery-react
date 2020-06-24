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
          <img onClick={() => this.setViewImage("pic1-progressive.jpg")} src={"./pic1-progressive.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic2-progressive.jpg")} src={"./pic2-progressive.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic3-progressive.jpg")} src={"./pic3-progressive.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic4-progressive.jpg")} src={"./pic4-progressive.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic5-progressive.jpg")} src={"./pic5-progressive.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic6-progressive.jpg")} src={"./pic6-progressive.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic7-progressive.jpg")} src={"./pic7-progressive.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic8-progressive.jpg")} src={"./pic8-progressive.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic9-progressive.jpg")} src={"./pic9-progressive.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic10-progressive.jpg")} src={"./pic10-progressive.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic11-progressive.jpg")} src={"./pic11-progressive.jpg"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic12-progressive.jpg")} src={"./pic12-progressive.jpg"} draggable="false" className="thumbnail" alt=""/>
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
