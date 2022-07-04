import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useRef } from 'react';
import {Offcanvas} from "bootstrap";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function OffCanvas() {
    const offCanvasRef = useRef(null); 
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => console.log(data);

    const handleShow = () => {
        const offcanvas = new Offcanvas(offCanvasRef);
        offcanvas.show();
    }; 


    return (
        <>
            <div className='container'>
            <button 
                className="btn btn-info button" 
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#offcanvasRight" 
                aria-controls="offcanvasRight" 
                style={{border:"1px solid #4682B4", backgroundColor:"#4682B4", color:"white"}}
                onClick={handleShow}
            >
            Adicionar vaga
            </button>
            
            <section className="card-deck row">
            <div className="row row-cols-3 row-cols-md-3 g-4">
            </div>
            </section>
            
        </div>
        <div
            ref={offCanvasRef}
            className="offcanvas offcanvas-end" 
            tabIndex="-1" id="offcanvasRight" 
            aria-labelledby="offcanvasRightLabel">
            
            <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Cadastrar vaga</h5>
            
            </div>
            <div className="offcanvas-body">
            <form onSubmit = { handleSubmit(onSubmit) }>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Título:</label> 
                    <input type="text" className="form-control" id="titleArea" nome="tituloarea" {...register('tituloarea', {required: "O campo precisa ter no máximo 20 caracteres.", maxLength: 20 }) } />
                    {/* <ErrorMessage errors = { errors } name="tituloarea" /> */}

                    
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Requisito 1:</label>
                    <textarea className="form-control" id="synopsisArea" rows="3" maxLength="141"></textarea>

                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Requisito 2:</label>
                    <textarea className="form-control" id="synopsisArea" rows="3" maxLength="141"></textarea>

                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Requisito 3:</label>
                    <textarea className="form-control" id="synopsisArea" rows="3" maxLength="141"></textarea>
                                  
                    <label htmlFor="exampleFormControlInput1" className="form-label">Empresa:</label>
                    <input type="text" className="form-control" id="titleArea" />
                    
                    <label htmlFor="exampleFormControlInput1" className="form-label">Faixa salarial:</label>
                    <input type="text" className="form-control" id="authorArea" name="salario"{...register('salario', {min: 1000, max: 100000000, required: "salário entre 1000 e 100000000"})}/>
                    {/* <ErrorMessage errors = { errors } name="slario" /> */}
          
                    
                    <label htmlFor="imgArea" className="form-label">Imagem</label>
                    <input type="text" className="form-control" id="imgArea" 
                    placeholder="Insira a URL da sua imagem" />
                </div>
                
                <div className="d-grid gap-2 d-md-block my-3 float-end">
                <button className="btn btn-secondary" type="close" data-bs-dismiss="offcanvas" >Fechar</button>
                <button className="btn btn-info" type="submit" style={{border:"1px solid", backgroundColor:"#4682B4"}}>Enviar</button>
                </div>
            </form>
            </div>
        </div>
    </>
    )
}