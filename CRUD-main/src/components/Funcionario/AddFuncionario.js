import React, { useState } from "react";
import FuncionarioDataServiceService from "../../services/Funcionario/FuncionarioDataServiceRest";
import Header from '../../components/Header';


const AddFuncionario = () => {
  const initialfuncionarioState = {
    id: null,
    nomefuncionario: "",
    telefone: '',
    nomeAtendente: "",
    codigo: "",
    estadoCivil: "",
    profissao: '',
    enderecoCompleto: '',
    email: '',
    dataNascimento: '',
    cartTrabalho: "",
  };
  const [funcionario, setFuncionario] = useState(initialfuncionarioState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFuncionario({ ...funcionario, [name]: value });
  };

  const savefuncionario = () => {
    var data = {
      nomeAtendente: funcionario.nomeAtendente,
      telefone: funcionario.telefone,
      codigo: funcionario.codigo,
      email: funcionario.email,
      enderecoCompleto: funcionario.enderecoCompleto,
      dataNascimento: funcionario.dataNascimento,
      cartTrabalho: funcionario.cartTrabalho,
      published: false
    };

    FuncionarioDataServiceService.create(data)
      .then(response => {
        setFuncionario({
          id: response.data.id,
          nomeAtendente: response.data.nomeAtendente,
          telefone: response.data.telefone,
          codigo: response.data.codigo,
          email: response.data.email,
          enderecoCompleto: response.data.enderecoCompleto,
          dataNascimento: response.data.dataNascimento,
          cartTrabalho: response.data.cartTrabalho,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newfuncionario = () => {
    setFuncionario(initialfuncionarioState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      <Header />
      {submitted ? (
        <div className="mx-auto text-center">
          <h4>Funcionario cadastrado com sucesso!</h4>
          <button className="btn btn-success" onClick={newfuncionario}>
            Adicionar
          </button>
        </div>
      ) : (
        <div id="contents">
          <div className="col-sm text-center">
            <h1><dt>Ficha de Funcionario</dt></h1>
          </div>
          <div className="form-group form" >
            <label htmlFor="title">Nome:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={funcionario.nomeAtendente}
              onChange={handleInputChange}
              name="nomeAtendente"
              placeholder="Nome Completo"
            />
          </div>
          <div className="form-group form" >
            <label htmlFor="title">Telefone:</label>
            <input
              type="number"
              className="form-control"
              id="title"
              required
              value={funcionario.telefone}
              onChange={handleInputChange}
              name="telefone"
              placeholder="telefone"
            />
          </div>
          <div className="form-group form" >
            <label htmlFor="title">Codigo:</label>
            <input
              type="number"
              className="form-control"
              id="title"
              required
              value={funcionario.codigo}
              onChange={handleInputChange}
              name="codigo"
              placeholder="codigo"
            />
          </div>
          <div className="form-group form" >
            <label htmlFor="title">Email:</label>
            <input
              type="email"
              className="form-control"
              id="title"
              required
              value={funcionario.email}
              onChange={handleInputChange}
              name="email"
              placeholder="email"
            />
          </div>
          <div className="form-group form" >
            <label htmlFor="title">Endereço:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={funcionario.enderecoCompleto}
              onChange={handleInputChange}
              name="enderecoCompleto"
              placeholder="Endereco"
            />
          </div>
          <div className="form-group form">
            <label htmlFor="title">Data de Nascimento:</label>
            <input
              type="date"
              className="form-control"
              id="title"
              required
              value={funcionario.dataNascimento}
              onChange={handleInputChange}
              name="dataNascimento"
            />
            <label htmlFor="title">Cart trabalho:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={funcionario.cartTrabalho}
              onChange={handleInputChange}
              name="cartTrabalho"
            />
          </div>
          <button onClick={savefuncionario} className="mt-5 btn btn-success text-center buttonform">
            Enviar
          </button>
        </div>
      )}
    </div>
  );
};

export default AddFuncionario;
