
import '../App.css';
import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import CreateVacancies from "./CreateVacancies.jsx"
import { useEffect, useState } from 'react';
import OffCanvas from './OffCanvas';






function App() {

  const [data, setData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3004/jobs")
  .then(response => {

     return response.json();
  })
  .then(jsondata => {
    setData(jsondata)
    console.log(jsondata)

  });
},[])
  console.log(data)


  return (
    <div className="App">
      <h1 className="text-center my-5" style={{fontSize: "60px", color: "#FF0000", WebkitTextStroke: "2px #1F3A3D"}}>tech job vacancies</h1>
      <OffCanvas />
      <div className="row">
        {data.map(vacancies => <CreateVacancies card={vacancies} />)}
      </div>
      
    </div>
  );
  
}

export default App;
