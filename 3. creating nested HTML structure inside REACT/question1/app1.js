const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "hi I am <h1> tag inside child div")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
