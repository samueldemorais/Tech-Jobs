
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"

export default ({card}) => {
    return (
      <>
          <div className="col p-3">
            <div className="card" style= {{width: "18rem"}}>
              <div className="card-body p-0">
                <h5 className="card-title text-center">{card.title}</h5>
                <img src={card.img} className="card-img-top"  width="590" height="250"alt="..."/> 
                <p>Requisitos necessários:</p>
                <p className="card-text">{card.requisito1}</p>
                <p className="card-text">{card.requisito2}</p>
                <p className="card-text">{card.requisito3}</p>
                <p className="card-text">empresa:{card.empresa}</p>
                <p className="card-text">Faixa salarial:{card.salario}</p>
                <button className= "text-center btn btn-primary botao" style={{backgroundColor: "#245B86", marginBottom: "10px", textAlign:"center !important"}}>Ver vaga</button>
              </div>
            </div>
          </div>
      </>
    )
  }