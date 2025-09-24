import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ==> (react element = js object) ==> HTML element using "render"

const heading = React.createElement("h1", { id: "heading" }, "Hello");

console.log(heading);

// JSX is not html inside js, jsx is just jsx basically it is a syntax which browsers cannot understand, and JSX gets transpiled before it reaches the js engine or browser because our browser or js engine cannot understand jsx, and this transpiled is done using a js compiler/transpiler which is being installed with parcel and it is known as "babel" which is present in "node_modules".

// "transpile" means converting a language/syntax into another, and here jsx is being converted into js.

// and how this jsx is transpiled? first jsx is converted to react element which is = to js object and then it is converted to html element using render.

const jsxheading = <h1 id="jsxheading">This is a jsx heading</h1>;

// upper line is converted to this ---> React.createElement("h1", {id:"jsxheading"}, "This is a jsx heading")

console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);
