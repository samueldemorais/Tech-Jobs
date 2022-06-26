import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default ({ card }) => {
    return (
        <div
            className="col p-5"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Link
                to="/teste"
                style={{ textDecoration: "none", color: "#000" }}
            >
                <div
                    className="card"
                    style={{
                        width: "18rem",
                        borderRadius: "5px",
                        boxShadow: "5px 5px 10px #000",
                    }}
                >
                    <div className="card-body p-2">
                        <h5 className="card-title text-center m-1">
                            {card.title}
                        </h5>
                        <img
                            src={card.img}
                            className="card-img-top mb-2"
                            width="590"
                            height="250"
                            alt="..."
                        />
                        <h5>Requisitos necessários:</h5>
                        <ul>
                            <li>{card.requisito1}</li>
                            <li>{card.requisito2}</li>
                            <li>{card.requisito3}</li>
                        </ul>

                        <h6 className="card-text">
                            Empresa: {card.empresa}
                        </h6>
                        <h6 className="card-text">
                            Faixa salarial: {card.salario}
                        </h6>
                        <button
                            className="text-center btn btn-primary botao"
                            style={{
                                backgroundColor: "#245B86",
                                marginBottom: "10px",
                                textAlign: "center !important",
                            }}
                        >
                            Ver vaga
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};
