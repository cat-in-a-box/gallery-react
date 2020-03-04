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
          <img onClick={() => this.setViewImage("pic1.png")} src={"./pic1.png"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic2.png")} src={"./pic2.png"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic3.png")} src={"./pic3.png"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic4.png")} src={"./pic4.png"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic5.png")} src={"./pic5.png"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic6.png")} src={"./pic6.png"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic7.png")} src={"./pic7.png"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic8.png")} src={"./pic8.png"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic9.png")} src={"./pic9.png"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic10.png")} src={"./pic10.png"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic11.png")} src={"./pic11.png"} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage("pic12.png")} src={"./pic12.png"} draggable="false" className="thumbnail" alt=""/>
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
