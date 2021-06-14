import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FuncionarioDataServiceService from "../../services/Funcionario/FuncionarioDataServiceRest";
import Header from '../../components/Header';

const FuncionariosList = (props) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [Funcionarios, setFuncionarios] = useState("");

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const retrieveTutorials = () => {
    FuncionarioDataServiceService.getAll()
      .then(response => {
        setFuncionarios(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };
  //remove um funcionario pelo id
  const deleteFuncionario = (id) => {
    if (window.confirm('Deseja excluir?')) {
      FuncionarioDataServiceService.remove(id)
        .then(response => {
          console.log(response.data);
          retrieveTutorials();
        })
        .catch(e => {
          console.log(e);
        });
    }

  }
  //remove todos os funcionario
  const removeAllFuncionarios = () => {
    if (window.confirm('Deseja excluir?')) {
      FuncionarioDataServiceService.removeAll()
        .then(response => {
          console.log(response.data);
          retrieveTutorials();
        })
        .catch(e => {
          console.log(e);
        });
    }
  };
  //filtra o nome do funcionario
  const findByTitle = () => {
    FuncionarioDataServiceService.findByTitle(searchTitle)
      .then(response => {
        setFuncionarios(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });

  };

  return (
    <div>
      <Header />
      <div className="list text-center">
        <div className="col-md-10 form">

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={onChangeSearchTitle}
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
          <h4>Lista de Funcionario</h4>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome Funcionario</th>
                <th scope="col">Telefone</th>
                <th scope="col">Codigo</th>
                <th scope="col">E-mail</th>
                <th scope="col">Endereço</th>
                <th scope="col">Data de Nascimento</th>
                <th scope="col">Carteira Trabalho</th>
              </tr>
            </thead>
            <tbody>
              {
                Funcionarios &&
                Funcionarios.map((Funcionario, index) => (
                  <tr>
                    <th scope="row">{Funcionario.id}</th>
                    <td >{Funcionario.nomeAtendente}</td>
                    <td >{Funcionario.telefone}</td>
                    <td >{Funcionario.codigo}</td>
                    <td >{Funcionario.email}</td>
                    <td >{Funcionario.enderecoCompleto}</td>
                    <td >{Funcionario.dataNascimento}</td>
                    <td >{Funcionario.cartTrabalho}</td>
                    <td > <Link to={"/funcionarios/" + Funcionario.id}
                      className="btn btn-warning">Editar</Link>
                    </td>
                    <td ><Link to="/funcionario" onClick={() => deleteFuncionario(Funcionario.id)}
                      className="btn btn-danger">Deletar</Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={removeAllFuncionarios}>
            Remover Todos
          </button>
        </div>
      </div>
    </div>

  );
};

export default FuncionariosList;
