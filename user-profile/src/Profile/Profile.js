import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.image} alt="avatar" />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.bio}</p>
        </div>
        <div className="card-footer">
          <a className="card-link" href={this.props.website}>
            {this.props.website}
          </a>
        </div>
      </div>
    );
  }
}

export default Profile;
