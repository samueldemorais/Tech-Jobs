
import '../App.css';
import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import CreateVacancies from "./CreateVacancies.jsx"
import { useEffect, useState } from 'react';
import OffCanvas from './OffCanvas';






function App() {

  const story = {
    img: 'https://www.tshirtgeek.com.br/wp-content/uploads/2021/03/com001.jpg',
    title: 'Python developer',
    requisito1: "Conhecimento em banco de dados (preferencialmente PostgreSQL);",
    requisito2: "Conhecimento em metodologias ágeis;",
    requisito3: "Experiência em framework Javascript (preferencialmente React JS).",
    empresa: 'Phoebus',
    salario: '1000.00' 
  }

  const [data, setData] = useState([])

  useEffect(()=>{
    fetch("../../vagas.json")
  .then(response => {
     return response.json();
  })
  .then(jsondata => setData(jsondata));
},[])
  console.log(data)


  return (
    <div className="App">
      <h1 className="text-center my-5" style={{fontSize: "60px", color: "#FF0000", WebkitTextStroke: "2px #1F3A3D"}}>tech job vacancies</h1>
      {data.map(vacancies => {
              return <CreateVacancies card={vacancies} />

      })}
      <OffCanvas />
    </div>
  );
  
}

export default App;
