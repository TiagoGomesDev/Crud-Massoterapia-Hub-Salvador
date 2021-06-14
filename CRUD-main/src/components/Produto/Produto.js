import React, { useState, useEffect } from "react";
import ProdutoDataService from "../../services/Produto/ProdutoDataServiceRest";
import { Link } from "react-router-dom";
import Header from '../../components/Header';

const Produto = props => {
  const initialProdutoState = {
    key: null,
    title: "",
    description: "",
    preco: "",
    quant: "",
    published: "Unpublished",
  };
  const [message, setMessage] = useState("");
  const [currentProduto, setCurrentProduto] = useState(initialProdutoState);

  const getTutorial = id => {
    ProdutoDataService.get(id)
      .then(response => {
        setCurrentProduto(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTutorial(props.match.params.id);
  }, [props.match.params.id]);

  // useEffect(()=>{
  //   const data = ProdutoDataService.getById(key)
  //   console.log(key)
  //   setCurrentProduto(data[0])     
  // }, [])

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentProduto({ ...currentProduto, [name]: value });
  };

  const updatePublished = status => {
    const data = {
      id: currentProduto.id,
      title: currentProduto.title,
      description: currentProduto.description,
      preco: currentProduto.preco,
      quant: currentProduto.quant,
      published: status
    };
    ProdutoDataService.update(currentProduto.id, data)
      .then(response => {
        setCurrentProduto({ ...currentProduto, published: status });
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateProduto = () => {
    //console.log(currentProduto)
    
    ProdutoDataService.update(currentProduto.id, currentProduto)
      .then(response => {
        console.log(response);
        setMessage("Produto atualizado com sucesso!");
      })
      .catch(e => {
        console.log(e);
      });

  };

  const deleteProduto = () => {
    if (window.confirm('Deseja excluir?')) {
      ProdutoDataService.remove(currentProduto.id)
        .then(response => {
          console.log(response.data);
          props.history.push("/produto");
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  return (
    <div>
      <Header />
      {currentProduto ? (
        <div className="edit-form form">
          <h4 className="text-center">Produto</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Titulo</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentProduto.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentProduto.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="preco">Preço</label>
              <input
                type="text"
                className="form-control"
                id="preco"
                name="preco"
                value={currentProduto.preco}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="quant">Quantidade</label>
              <input
                type="text"
                className="form-control"
                id="quant"
                name="quant"
                value={currentProduto.quant}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentProduto.published ? "Published" : "Pending"}
            </div>
          </form>
          <div className="text-center">
            {currentProduto.published ? (
              <button
                className="btn btn-success mr-2 text-center"
                onClick={() => updatePublished(false)}
              >
                Cancelar
              </button>
            ) : (
              <button
                className="btn btn-success mr-2 text-center"
                onClick={() => updatePublished(true)}
              >
                Publicar
              </button>
            )}
            <button className="btn btn-danger mr-2 text-center" onClick={deleteProduto}>
              Deletar
            </button>
            <Link to="/produto">
              <button
                type="submit"
                className="btn btn-warning text-center"
                onClick={updateProduto}
              >
                Atualizar
              </button>
            </Link>
          </div>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Por favor, clique em um Tutorial ...</p>
        </div>
      )}
    </div>
  );
};

export default Produto;

