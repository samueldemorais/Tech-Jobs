// import '../App.css';
// import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateVacancies from "./CreateVacancies.jsx";
import { useEffect, useState } from "react";
import OffCanvas from "./OffCanvas";



function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3004/jobs")
            .then((response) => {
                return response.json();
            })
            .then((jsondata) => {
                setData(jsondata);
                console.log(jsondata);
            });
    }, []);
    console.log(data);

    return (
            <div className="App" style={{ background: "#ddd", paddingTop: "25px" }}>
                

                
                <OffCanvas />
             
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {data.map((vacancies) => (
                        <CreateVacancies card={vacancies} />
                    ))}
                </div>
            </div>
    );
}

export default App;
