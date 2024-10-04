import { useState } from 'react';
import ScreenLoader from "./Components/ScreenLoader/ScreenLoader"
import './App.scss';
import Index from './Pages/Routes';

function App() {
  const [isLoading , setIsLoading] = useState(true);
  setTimeout(()=>{
    setIsLoading(false)
  },2500)
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
