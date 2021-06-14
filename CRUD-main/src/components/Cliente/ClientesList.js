import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClienteDataService from "../../services/Cliente/clienteDataServiceRest";
import Header from '../Header'

const ClientesList = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [Clientes, setClientes] = useState();
  const [tdsClientes, setTdsClientes] = useState([]);

  useEffect(() => {
    retrieveClientes();
  }, []);

  const retrieveClientes = () => {
    ClienteDataService.getAll()
      .then(response => {
        setClientes(response.data);
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
  // deletar cliente
  const deleteCliente = (id) => {
    if (window.confirm('Deseja excluir?')) {
      ClienteDataService.remove(id)
        .then(response => {
          console.log(response.data);    
          retrieveClientes();
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
  //remover todos
  const removeAllClientes = () => {
    if (window.confirm('Deseja excluir?')) {
      setTdsClientes(Clientes.id)
      console.log(setTdsClientes);
      ClienteDataService.remove(tdsClientes)
        .then(response => {
          console.log(response.data);
          retrieveClientes();
        })
        .catch(e => {
          console.log(e);
        });
    }
  };
  // filtrar por nome
  const findByTitle = () => {
    ClienteDataService.findByTitle(searchTitle)
      .then(response => {
        setClientes(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list mx-auto ">
      <Header/>    
      <div className="list text-center ">
        {/* campo para buscar */}
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
        <div className="">
          {/* Lista de pacientes */}
          <h4>Lista de Pacientes</h4>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome Paciente</th>
                <th scope="col">Telefone</th>
                <th scope="col">E-mail</th>
                <th scope="col">Atendente</th>
                <th scope="col">Data do atendimento</th>
                <th scope="col">Profissional</th>
                <th scope="col">Tratramento</th>
                <th scope="col">Intensidade</th>
                <th scope="col">Localização da dor</th>
                <th scope="col">Tratamento</th>
              </tr>
            </thead>
            <tbody>
              {
                Clientes &&
                Clientes.map((Cliente, index) => (
                  <tr>
                    <th scope="row">{Cliente.id}</th>
                    <td>{Cliente.nomeCliente}</td>
                    <td>{Cliente.telefone}</td>
                    <td>{Cliente.email}</td>
                    <td>{Cliente.nomeAtendente}</td>
                    <td>{Cliente.dataInicio}</td>
                    <td>{Cliente.proficional}</td>
                    <td>{Cliente.tratamento}</td>
                    <td>{Cliente.intensidade}</td>
                    <td>{Cliente.localizacaoDor}</td>
                    <td>{Cliente.tratamento}</td>
                    <td> <Link to={"/Clientes/" + Cliente.id}
                      className="btn btn-warning">Editar</Link>
                    </td>
                    <td><Link onClick={() => deleteCliente(Cliente.id)}
                      className="btn btn-danger">Deletar</Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
         
          <button className="m-3 btn btn-sm btn-danger"
            onClick={removeAllClientes}>               
            Deletar Todos
          </button>
        </div>
      </div>
    </div>

  );
};

export default ClientesList;
