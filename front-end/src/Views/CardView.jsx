import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

export default () => {
    const {id} = useParams()
    const [data, setData] = useState()
    
    useEffect(() => {
        fetch(`http://localhost:3004/jobs/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((jsondata) => {
                setData(jsondata);
            });
    }, []);
    
    return(
        <>
        {data != undefined ?
        
        <>
        <h1 className="text-center my-5" style={{ fontSize:"60px", color:"#4682B4", webkitTextStroke:" 2px #1F3A3D"}}>{data.title}</h1>
        <p className='text-center' style={{fontSize:"40px", fontWeight: "bold"}} > {data.empresa}</p>
        <div className="container">
            <div className="row">
            <div className="col">
                <div>
                <img src={data.img} alt="Girl in a jacket" width="300" height="300" className='text-center'/>
                </div>
            </div>
            <div className="col">
                <div className="border border-dark mx-auto" id="pages">
                <h5>Requisitos necessários:</h5>
                        <ul>
                            <li>{data.requisito1}</li>
                            <li>{data.requisito2}</li>
                            <li>{data.requisito3}</li>
                        </ul>
                        <h6 className="card-text text-center">
                            Empresa: {data.empresa}
                        </h6>
                        <h6 className="card-text text-center">
                            Faixa salarial: {data.salario}
                        </h6>
                </div>
            </div>
            </div>
        </div>
        </>
        :
        <>
            <h1>carregando</h1>
        </>
        }
        </>
    )
}