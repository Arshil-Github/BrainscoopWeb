import Header from './Components/Header/Header'
import HomePage from './Components/HomePage/HomePage'
import AboutUs from './Components/About us/AboutUs'
import NewPost from './Components/NewPost/NewPost'
import PostView from './Components/PostView/PostView'
import style from './App.module.css'
import { useEffect, useState } from 'react'

const fetchServer = "https://brainscoopweb.onrender.com"

function App() {

  const [pageString, setPageString] = useState("home");
  const [currentPage, setCurrentPage] = useState(<HomePage/>);

  useEffect(()=>{
    if(pageString == "home")
    {
      setCurrentPage(<HomePage fetchServer={fetchServer}/>);
    }
    else if(pageString == "writePost")
    {
      setCurrentPage(<NewPost
      postCallback={(data) =>{
        PostOnServer(data)
      }}/>)
    }
  }, [pageString]);
  
  return (
    <div>
      <Header homeCallBack={() =>{
        setPageString("home");
      }}
      writePostCallback={()=>{
        setPageString("writePost");
      }}/>

      <div className={style.body}>
        {currentPage}
      </div>

    </div>
  )

  function PostOnServer(data)
  {
    fetch(`${fetchServer}/newPost`,{
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://localhost:3000',
        'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify(data)
    })
    .then(result =>{
      alert("Your post was submitted");
      setPageString("home");
    })
  }
}

export default App
