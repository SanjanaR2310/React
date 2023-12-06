const heading = React.createElement(
  "h1",                                   //name of the tag, ex- h1, span , div etccc
  { id: "heading", xyz: "abc" },          //attributes
  "Hello world from React!"               //children
);
console.log(heading); //heading here is not a html heading tag but a object which is react element(normal js object) //console will return an object
const root = ReactDOM.createRoot(document.getElementById("root"));  //will use reactdom to create root
root.render(heading); //this render method will convert object into h1 tag

{
  /* <div id="parent">
    <div id="child">
        <h1>i'm a h1 tag</h1>
        <h2>i'm a h1 tag</h2>    //we use array to add more than one chidren
    </div>
      <div id="child2">
        <h1>i'm a h1 tag</h1>
        <h2>i'm a h1 tag</h2>
    </div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
