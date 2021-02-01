import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/Nav";

const Page = () => {
  return (
    <>
      <NavBar />
    </>
  );
};

ReactDOM.render(<Page />, document.getElementById("root"));
