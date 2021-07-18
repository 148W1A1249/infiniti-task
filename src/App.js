import './App.css';
import { useState } from 'react';
import LoginTemplate from './component/LoginTemplate/loginTemplate';
import MainPage from './component/mainPage/MainPage';


function App() {
  const [loginPage,setLoginPage] = useState(true);
  return (loginPage ? <LoginTemplate setPage={setLoginPage}/>: <MainPage/>);
}

export default App;
