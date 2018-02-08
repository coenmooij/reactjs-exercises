import React, { Component } from "react";

import "./Form.css";

class Form extends Component {
  render() {
    return (
      <div>
        <h1>Edit Profile</h1>
        <hr />
        <form className="form">
          <div className="form-group">
            <label for="image">Picture</label>
            <input
              type="text"
              id="image"
              className="form-control"
              onChange={this.props.updateImage}
              value={this.props.image}
            />
          </div>
          <hr />
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              onChange={this.props.updateName}
              value={this.props.name}
            />
          </div>
          <div className="form-group">
            <label for="bio">About {this.props.name}</label>
            <textarea
              id="bio"
              className="form-control"
              onChange={this.props.updateBio}
              value={this.props.bio}
            />
          </div>
          <div className="form-group">
            <label for="website">Website</label>
            <input
              type="text"
              id="website"
              className="form-control"
              onChange={this.props.updateWebsite}
              value={this.props.website}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
