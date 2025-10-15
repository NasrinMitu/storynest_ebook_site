import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from ".src/pages/Home";
import About from ".src/pages/About";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1>This is Official SIte of the StoryNest. A cozy ebook store that serves affordable and educational content for the children with love and care</h1>
    </>
  )
}

export default App
