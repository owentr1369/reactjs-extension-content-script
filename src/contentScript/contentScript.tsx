// TODO: content script
import React from "react";
import ReactDOM from "react-dom";
import MyComponent from '../components/MyComponent';

const container = document.createElement("div");
document.body.appendChild(container);

ReactDOM.render(<MyComponent />, container);
