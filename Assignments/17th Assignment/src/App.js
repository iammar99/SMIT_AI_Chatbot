import { useState } from 'react';
import ScreenLoader from "./Components/ScreenLoader/ScreenLoader"
import './App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Index from './Pages/Routes';

function App() {
  const [isLoading , setIsLoading] = useState(true);
  setTimeout(()=>{
    setIsLoading(false)
  },2000)
  if(isLoading){
    return <ScreenLoader/>
  }
  else{
    return (
      <>
      <Index/>
      </>
    );
  }
}

export default App;
