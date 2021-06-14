import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProdutoDataService from "../../services/Produto/ProdutoDataServiceRest";
import Header from '../../components/Header';

const ProdutoList = () => {
  const [searchtitle, setSearchtitle] = useState("");
  const [Produto, setProduto] = useState();
  
  useEffect(() => {
    retrieveProdutos();
  }, []);

  const retrieveProdutos = () => {
    ProdutoDataService.getAll()
      .then(response => {
        setProduto(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const onChangeSearchtitle = e => {
    const searchtitle = e.target.value;
    setSearchtitle(searchtitle);
  };
  // deletar cliente
  const deleteProduto = (id) => {
    if (window.confirm('Deseja excluir?')) {
      ProdutoDataService.remove(id)
        .then(response => {
          console.log(response.data);
          retrieveProdutos();
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
  //remover todos
  const removeAllProduto = () => {
    if (window.confirm('Deseja excluir?')) {
      ProdutoDataService.removeAll()
        .then(response => {
          console.log(response.data);
          retrieveProdutos();
        })
        .catch(e => {
          console.log(e);
        });
    }
  };
  // filtrar por nome
  const findByTitle = () => {
    ProdutoDataService.findByTitle(searchtitle)
      .then(response => {
        setProduto(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list text-center">
      <Header />       
      <div className="list text-center">
        {/* campo para buscar */}
        <div className="col-md-10 form">
          <div className="input-group mb-3 ">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchtitle}
              onChange={onChangeSearchtitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={findByTitle}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-10 mx-auto">
          <h4>Produtos</h4>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Titulo</th>
                <th scope="col">Descrição</th>
                <th scope="col">Preço</th>
                <th scope="col">Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {
                Produto &&
                Produto.map((Produto, index) => (
                  <tr>
                    <th scope="row">{Produto.id}</th>
                    <td>{Produto.title}</td>
                    <td>{Produto.description}</td>
                    <td>{Produto.preco}</td>
                    <td>{Produto.quant}</td>
                    <td> <Link to={"/Produtos/" + Produto.id}
                      className="mr-0 btn btn-warning">Editar</Link>
                    </td>
                    <td> <Link onClick={() => deleteProduto(Produto.id)}
                      className="mb-0 btn btn-danger">Remover</Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={removeAllProduto}>
            Remover Todos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdutoList;
