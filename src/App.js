import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Hamza Nasri",
        bio: `En tant que full stack developer, je suis impliqué de la conception à la finalisation du produit.
         Je fais en sorte de résoudre le problème ou le besoin initial du client, 
         en mettant en place des outils et/ou en développant des sites et des applications,
         et m’assure ensuite du bon fonctionnement du tout ce qui a été réalisé`,
        image: "https://i.morioh.com/644d5dcb49.png",
        profession: "Web devolopper",
      },
      show: false,
      time: new Date().toLocaleString,
    };
  }

  hundleClick = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount = () => {
    this.intervalID = setInterval(() => this.tick(), 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.intervalID);
  };
  tick = () => {
    this.setState({
      time: new Date().toLocaleString(),
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.show === true ? (
          <div className="sho">
            <p className="App-clock">The time is {this.state.time}.</p>
            <img className="image" src={this.state.Person.image} alt="logo" />
            <h1>{this.state.Person.fullName}</h1>

            <h1>{this.state.Person.profession}</h1>
            <div className="divbio">
              <p>{this.state.Person.bio}</p>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <button className="btn" onClick={this.hundleClick}>
          {" "}
          show{" "}
        </button>
      </div>
    );
  }
}

export default App;
