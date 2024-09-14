import $ from "jquery";
import React from "react";

// Always use jquery inside the useEffect

function App() {
  React.useEffect(() => {
    // Example: Use jQuery to manipulate the DOM
    $("#myDiv").css("color", "green");
  }, []);

  return <div id="myDiv">Hello, jQuery in React!</div>;
}

export default App;
