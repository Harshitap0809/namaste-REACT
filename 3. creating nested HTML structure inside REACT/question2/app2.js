const parent = React.createElement(
  "div",
  { id: "parent" },

  // child1
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "hi I am <h1> tag inside child1 div"),
      React.createElement("h2", {}, "hi I am <h2> tag inside child1 div"),
    ]),
    // child2
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "hi I am <h1> tag inside child2 div"),
      React.createElement("h2", {}, "hi I am <h2> tag inside child2 div"),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
