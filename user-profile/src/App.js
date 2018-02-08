import React, { Component } from "react";
import Form from "./Form/Form";
import Profile from "./Profile/Profile";

import "./App.css";

class App extends Component {
  state = {
    image: "https://profile.actionsprout.com/default.jpeg",
    name: "Coen",
    bio: "I am a developer",
    website: "https://react-exercises.coenmooij.nl/"
  };
  constructor(props) {
    super(props);

    this.updateImage = this.updateImage.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateBio = this.updateBio.bind(this);
    this.updateWebsite = this.updateWebsite.bind(this);
  }

  updateImage = event => {
    this.setState({ image: event.target.value });
  };

  updateName = event => {
    this.setState({ name: event.target.value });
  };

  updateBio = event => {
    this.setState({ bio: event.target.value });
  };

  updateWebsite = event => {
    this.setState({ website: event.target.value });
  };

  render() {
    return (
      <div className="App container">
        <header>
          <h1 className="display-4">User Profile</h1>
          <hr />
          <p className="lead">
            Basic React app with components, two-way data binding, props, state,
            and styles
          </p>
        </header>
        <main className="container-fluid">
          <div className="row">
            <div className="col-6">
              <Form
                image={this.state.image}
                name={this.state.name}
                bio={this.state.bio}
                website={this.state.website}
                updateName={this.updateName}
                updateBio={this.updateBio}
                updateWebsite={this.updateWebsite}
                updateImage={this.updateImage}
              />
            </div>
            <div className="col-6">
              <Profile
                image={this.state.image}
                name={this.state.name}
                bio={this.state.bio}
                website={this.state.website}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
