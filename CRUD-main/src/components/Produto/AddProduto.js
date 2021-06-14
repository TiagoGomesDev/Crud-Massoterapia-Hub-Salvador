import React, { useState } from "react";
import ProdutoDataService from "../../services/Produto/ProdutoDataServiceRest";
import Header from '../../components/Header';

const AddProduto = () => {
  const initialProdutoState = {
    id: null,
    title: "",
    description: "",
    preco: "",
    quant: "",
    published: false
  };
  const [Produto, setProduto] = useState(initialProdutoState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduto({ ...Produto, [name]: value });
  };

  const saveProduto = () => {
    var data = {
      title: Produto.title,
      description: Produto.description,
      preco: Produto.preco,
      quant: Produto.quant,
      published: false
    };

    ProdutoDataService.create(data)
      .then(response => {
        setProduto({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          preco: response.data.preco,
          quant: response.data.quant,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newProduto = () => {
    setProduto(initialProdutoState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      <Header />
      {submitted ? (
        <div className="mx-auto text-center">
          <h4>Produto cadastrado com sucesso</h4>
          <button className="btn btn-success" onClick={newProduto}>
            Adicionar
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group form">
            <label htmlFor="title">Titulo</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Produto.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>
          <div className="form-group form">
            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={Produto.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>
          <div className="form-group form">
            <label htmlFor="preco">Preço</label>
            <input
              type="text"
              className="form-control"
              id="preco"
              required
              value={Produto.preco}
              onChange={handleInputChange}
              name="preco"
            />
          </div>
          <div className="form-group form">
            <label htmlFor="quant">Quantidade</label>
            <input
              type="text"
              className="form-control"
              id="quant"
              required
              value={Produto.quant}
              onChange={handleInputChange}
              name="quant"
            />
          </div>
          <button onClick={saveProduto} className=" btn btn-success text-center buttonform mt-5">
            Enviar
          </button>
        </div>
      )}
    </div>
  );
};
export default AddProduto;
