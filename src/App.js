import axios from "axios";
import { useEffect } from 'react';

function App() {
  const callApi = async()=>{
    axios.get("http://localhost:5000/api").then((res)=>{console.log(res.data.test)});
  };

  useEffect(()=>{
    callApi();
  }, []);
  
  return <div>test</div>;
}

export default App;

