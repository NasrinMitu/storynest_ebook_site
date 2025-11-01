// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from "react-router-dom";
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// )

import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Favorites from "./pages/Favorites/Favorites.jsx";
import Books from "./pages/Books/Books";
import Donate from "./pages/Donate/Donate";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="books" element={<Books />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="about" element={<About />} />
      <Route path="donate" element={<Donate />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
