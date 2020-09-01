import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  render() {
    name = "under.";
    return (
      <div>
          <h1>It's {name}</h1>
          <h2>It's {((num) => {return 1 + num;})(3)}</h2>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);