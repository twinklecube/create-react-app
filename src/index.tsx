import React from "react";
import {createRoot} from "react-dom/client";

const rootElement = document.querySelector('#root') as HTMLDivElement;
const root = createRoot(rootElement);
root.render(<div>malin</div>)