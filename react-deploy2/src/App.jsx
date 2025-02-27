import {useEffect, useState} from 'react'
import './App.css'
import {Link} from "react-router-dom";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    async function getData () {
     const response =  await fetch("https://v2.api.noroff.dev/auction/listings")
      const data = await response.json()
      console.log(data.data)
      setData(data)
    }
    getData()
  }, []);

  return (
    <>
        <Link to={"/test"}>to test page</Link>
      <div></div>

    </>
  )
}

export default App
