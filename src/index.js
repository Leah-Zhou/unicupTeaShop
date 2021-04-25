import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/Nav";
import DotLoader from "react-spinners/DotLoader";

const Page = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <DotLoader color={"#f29f05"} size={60} loading={loading} />
        </div>
      ) : (
        <NavBar />
      )}
    </>
  );
};

ReactDOM.render(<Page />, document.getElementById("root"));
