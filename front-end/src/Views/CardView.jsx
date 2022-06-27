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
            <h1>{data.title}</h1>
        </>
        :
        <>
            <h1>carregando</h1>
        </>
        }
        </>
    )
}