import logo from './logo.svg';
import './App.css';
import Profile from './Component/Profile';
import { useEffect, useState } from 'react';
import Repo from './Component/Repo';

function App() {

  const [userInfo, setUserInfo] = useState([])

  useEffect( ()=>{
    fetch("https://api.github.com/users/Sinister20/repos")
    .then(res=>res.json())
    .then((data)=> setUserInfo([...data]))
  },[])


  return (
    <div className="App">
      <Profile/>
      <Repo data={userInfo} />
    </div>
  );
}

export default App;
