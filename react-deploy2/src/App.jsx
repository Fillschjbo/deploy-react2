import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link} from "react-router-dom";
import {Dog} from "./component/Dog/index.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>i have successfully deployed</h1>
        <Link to={"/test"}>to test page</Link>
        <a href="/test">to test </a>
      <Dog/>
    </>
  )
}

export default App
