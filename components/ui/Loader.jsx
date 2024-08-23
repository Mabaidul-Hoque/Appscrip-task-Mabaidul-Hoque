import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "0 200px",
      }}
    >
      <h2 style={{ width: "200px", height: "50px" }}>Loading...</h2>
    </div>
  );
};

export default Loader;
