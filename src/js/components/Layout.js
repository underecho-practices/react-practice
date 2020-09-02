import React from "react";
import Header from "./Header"
import Footer from "./Footer"


export default class Layout extends React.Component {
  constructor() {
    super();
    this.name = "Tsutomu";
  }
  render() {
    return (
      <div>
        <Header />
        <h1>It's {this.name}!</h1>
        <Footer />
      </div>
    );
  }
}