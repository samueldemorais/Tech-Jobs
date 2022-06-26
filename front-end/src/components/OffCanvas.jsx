import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useRef } from 'react';
import {Offcanvas} from "bootstrap";

export default function OffCanvas() {
    const offCanvasRef = useRef(null); 

    const handleShow = () => {
        const offcanvas = new Offcanvas(offCanvasRef);
        offcanvas.show();
    }; 

    // const handleHide = () => {
    //     const offcanvas = new bootstrap.Offcanvas(offCanvasRef);
    //     offcanvas.hide();
    // }; 


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
            <h5 id="offcanvasRightLabel">Adiciona uma História Contada do seu jeito!</h5>
            
            </div>
            <div className="offcanvas-body">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Título:</label>
                    <input type="text" className="form-control" id="titleArea" />
                    
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Requisito 1:</label>
                    <textarea className="form-control" id="synopsisArea" rows="3" maxLength="141"></textarea>

                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Requisito 2:</label>
                    <textarea className="form-control" id="synopsisArea" rows="3" maxLength="141"></textarea>

                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Requisito 3:</label>
                    <textarea className="form-control" id="synopsisArea" rows="3" maxLength="141"></textarea>
                                  
                    <label htmlFor="exampleFormControlInput1" className="form-label">Empresa:</label>
                    <input type="text" className="form-control" id="titleArea" />
                    
                    <label htmlFor="exampleFormControlInput1" className="form-label">Faixa salarial:</label>
                    <input type="text" className="form-control" id="authorArea" />
                    
                    <label htmlFor="imgArea" className="form-label">Imagem</label>
                    <input type="text" className="form-control" id="imgArea" 
                    placeholder="Insira a URL da sua imagem" />
                </div>
                
                <div className="d-grid gap-2 d-md-block my-3 float-end">
                <button className="btn btn-secondary" type="close" data-bs-dismiss="offcanvas" >Fechar</button>
                <button className="btn btn-info" type="button" style={{border:"1px solid", backgroundColor:"#4682B4"}}>Enviar</button>
                </div>
            </form>
            </div>
        </div>
    </>
    )
}