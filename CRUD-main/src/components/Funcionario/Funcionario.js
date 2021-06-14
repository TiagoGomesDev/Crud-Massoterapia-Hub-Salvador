import React, { useState, useEffect } from "react";
import FuncionarioDataService from "../../services/Funcionario/FuncionarioDataServiceRest";
import { Link } from "react-router-dom";
import Header from '../../components/Header';

const Funcionario = props => {
  // valores iniciais
  const initialFuncionarioState = {
    key: null,
    title: "",
    description: "",
    nomeCliente: "",
    telefone: '',
    proficional: "",
    nomeAtendente: "",
    estadoCivil: "",
    profissao: '',
    enderecoCompleto: '',
    email: '',
    dataNascimento: '',
    cartTrabalho: '',
    published: "Unpublished",
  };
  const [message, setMessage] = useState("");
  const [currentFuncionario, setCurrentFuncionario] = useState(initialFuncionarioState);
  // const [key, setKey] = useState(props.match.params.id)

  const getTutorial = id => {
    FuncionarioDataService.get(id)
      .then(response => {
        setCurrentFuncionario(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    getTutorial(props.match.params.id);
    
  }, [props.match.params.id]);
  // useEffect(() => {
  //   const data = FuncionarioDataService.getById(key)
  //   console.log(key)
  //   setCurrentFuncionario(data[0])
  // }, [])
  // pega os valores digitados
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentFuncionario({ ...currentFuncionario, [name]: value });
  };

  //atualiza a opção do published
  const updatePublished = status => {
    const data = {
      id: currentFuncionario.id,
      nomeAtendente: currentFuncionario.nomeAtendente,
      telefone: currentFuncionario.telefone,
      codigo: currentFuncionario.codigo,
      email: currentFuncionario.email,
      enderecoCompleto: currentFuncionario.enderecoCompleto,
      dataNascimento: currentFuncionario.dataNascimento,
      cartTrabalho: currentFuncionario.cartTrabalho,
      published: status
    };
    FuncionarioDataService.update(currentFuncionario.id, data)
      .then(response => {
        setCurrentFuncionario({ ...currentFuncionario, published: status });
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });

  };

  const updateFuncionario = () => {
    // valores para o update

    FuncionarioDataService.update(currentFuncionario.id, currentFuncionario)
      .then(response => {
        console.log(response);
        setMessage("Funcionario atualizado com sucesso!");
      })
      .catch(e => {
        console.log(e);
      });
  };
  //deletar o funcionario
  const deleteFuncionario = () => {
    if (window.confirm('Deseja excluir?')) {
      FuncionarioDataService.remove(currentFuncionario.id)
        .then(response => {
          console.log(response.data);
          props.history.push("/funcionario");
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  return (
    <div>
      <Header />
      {currentFuncionario ? (

        <div id="contents">
          <div className="col-sm text-center">
            <h1><dt>Ficha de Funcionario</dt></h1>
          </div>

          <form className="form">
            <div className="form-group">
              <label htmlFor="nomeAtendente">Nome Funcionario</label>
              <input
                type="text"
                className="form-control"
                id="nomeAtendente"
                name="nomeAtendente"
                value={currentFuncionario.nomeAtendente}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="text"
                className="form-control"
                id="telefone"
                name="telefone"
                value={currentFuncionario.telefone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="codigo">Codigo</label>
              <input
                type="number"
                className="form-control"
                id="codigo"
                name="codigo"
                value={currentFuncionario.codigo}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                className="form-control"
                id="nomeAtendente"
                name="email"
                value={currentFuncionario.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Endereço:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={currentFuncionario.enderecoCompleto}
                onChange={handleInputChange}
                name="enderecoCompleto"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Data de Nascimento:</label>
              <input
                type="date"
                className="form-control"
                id="dataNascimento"

                value={currentFuncionario.dataNascimento}
                onChange={handleInputChange}
                name="dataNascimento"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cartTrabalho">Cart Trabalho:</label>
              <input
                type="text"
                className="form-control"
                id="cartTrabalho"
                name="cartTrabalho"

                value={currentFuncionario.cartTrabalho}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentFuncionario.published ? "Published" : "Pending"}
            </div>
          </form>
          <div className="text-center">
            <div>
              {currentFuncionario.published ? (
                <button
                  className=" btn btn-success "
                  onClick={() => updatePublished(false)}
                >
                  Cancelar
                </button>
              ) : (
                <button
                  className="btn btn-success "
                  onClick={() => updatePublished(true)}
                >
                  Publicar
                </button>
              )}
              <Link to="/funcionario">
                <button className="btn btn-danger " onClick={deleteFuncionario}>
                  Deletar
                </button>
              </Link>

              <a className="" href="/funcionario" >
                <button
                  type="submit"
                  className=" btn btn-warning"
                  onClick={updateFuncionario}
                >
                  Atualizar
                </button>
              </a>
            </div>
          </div>
          <p>{message}</p>
          
        </div>
      ) : (
        <div>
          <br />
          <p>Please click to return...</p>
        </div>
      )}
    </div>

  );
};

export default Funcionario;
