import React from "react";
import {createRoot} from "react-dom/client";
import App from "./components/app/App";

const rootElement = document.querySelector('#root') as HTMLDivElement;
const root = createRoot(rootElement);
root.render(<App />)