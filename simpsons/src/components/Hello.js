import React, { Component, useState } from "react";
import "../Hello.css";

const Hello = (props) => {
  let prueba = "hola";
  const [greet, setGreet] = useState("Hola");

  const funcionPrueba = () => {
    // setGreet(greet == "Hola" ? "Bonjour" : "Hola");
    prueba = "Bonjour";
  };

  return (
    <h1
      //   onClick={() => {
      //     funcionPrueba();
      //       }}
      onClick={() => funcionPrueba()}
    >
      {prueba}, {props.name}
    </h1>
  );
};

export default Hello;

// class Hello extends Component {
//   // A stateful component needs to
//   constructor(props) {
//     // be promoted into a class
//     super(props);

//     this.state = { clicked: false }; // defines initial state

//     this.clickDiv = this.clickDiv.bind(this);
//   }

//   clickDiv() {
//     alert("Hola");
//   }

//   render() {
//     return (
//       <h1 className={this.state.clicked ? "clicked" : ""}>
//         Hello, {this.props.name}
//       </h1>
//     );
//   }
// }
