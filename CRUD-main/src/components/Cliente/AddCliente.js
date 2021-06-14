import React, { useState } from "react";
import ClienteDataService from "../../services/Cliente/clienteDataServiceRest";
import Header from '../Header'

const AddCliente = () => {
  const initialClienteState = {
    id: null,
    /* Nome: "", */
    nomeCliente: "",
    telefone: '',
    proficional: "",
    nomeAtendente: "",
    estadoCivil: "",
    profissao: '',
    enderecoCompleto: '',
    email: '',
    dataInicio: "",
    dataConsulta: "",
    localizacaoDor: "",
    intensidade: "",
    tempo: "",
    tratamento: "",
    medicamento: "",
    quaisAlergias: "",
    alergias: "",
    incomodo: "",
    ocorrencia: "",
    habitos: "",
    queix: "",
    comentario: ""
    /* title: "",
    description: "",
    published: false */
  };
  const [Cliente, setCliente] = useState(initialClienteState);
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCliente({ ...Cliente, [name]: value });
  };

  const saveCliente = () => {
    var data = {
      nomeAtendente: Cliente.nomeAtendente,
      proficional: Cliente.proficional,
      dataInicio: Cliente.dataInicio,
      dataConsulta: Cliente.dataConsulta,
      localizacaoDor: Cliente.localizacaoDor,
      intensidade: Cliente.intensidade,
      tempo: Cliente.tempo,
      tratamento: Cliente.tratamento,
      medicamento: Cliente.medicamento,
      quaisAlergias: Cliente.quaisAlergias,
      alergias: Cliente.alergias,
      incomodo: Cliente.incomodo,
      ocorrencia: Cliente.ocorrencia,
      queix: Cliente.queix,
      habitos: Cliente.habitos,
      nomeCliente: Cliente.nomeCliente,
      estadoCivil: Cliente.estadoCivil,
      profissao: Cliente.profissao,
      telefone: Cliente.telefone,
      enderecoCompleto: Cliente.enderecoCompleto,
      email: Cliente.email,
      comentario: Cliente.comentario

    };
    ClienteDataService.create(data)
      .then(response => {
        setCliente({
          nomeAtendente: response.data.nomeAtendente,
          proficional: response.data.proficional,
          dataInicio: response.data.dataInicio,
          dataConsulta: response.data.dataConsulta,
          localizacaoDor: response.data.localizacaoDor,
          intensidade: response.data.intensidade,
          tempo: response.data.tempo,
          tratamento: response.data.tratamento,
          medicamento: response.data.medicamento,
          quaisAlergias: response.data.quaisAlergias,
          alergias: response.data.alergias,
          incomodo: response.data.incomodo,
          ocorrencia: response.data.ocorrencia,
          queix: response.data.queix,
          habitos: response.data.habitos,
          nomeCliente: response.data.nomeCliente,
          estadoCivil: response.data.estadoCivil,
          profissao: response.data.profissao,
          telefone: response.data.telefone,
          enderecoCompleto: response.data.enderecoCompleto,
          email: response.data.email,
          comentario: response.data.comentario
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newCliente = () => {
    setCliente(initialClienteState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      <Header />

      {submitted ? (
        <div className="text-center">
          <h4 className="">Cliente cadastrado com sucesso!</h4>
          <button className="btn btn-success" onClick={newCliente}>
            Adicionar
          </button>
        </div>
      ) : (

        <div id="contents" className="form">
          <div className="col-sm text-center">
            <h1><dt>Ficha de Anamnese</dt></h1>
          </div>
          <strong className="text-center">Dados do Atendente:</strong>
          <div className="form-group">
            <label htmlFor="title">Nome:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.nomeAtendente}
              onChange={handleInputChange}
              name="nomeAtendente"
              placeholder="Nome Completo"
            />
          </div>
          <label>Profissional Indicado:</label>
          <select className="form-select" aria-label="Default select example"
            name="proficional" value={Cliente.proficional}
            onChange={handleInputChange || ''}>
            <option selected>Opções:</option>
            <option value="1">Drenagem Linfática</option>
            <option value="2">Bambuterapia</option>
            <option value="3">Massagem Suéca</option>
            <option value="4">Massagem com Pedras Quentes</option>
            <option value="5">Massagem de Aromaterapia</option>
            <option value="6">Massagem Profunda</option>
            <option value="7">Massagem Desportiva</option>
            <option value="8">Massagem de Facial</option>
            <option value="9">Massagem Shiatsu</option>
            <option value="10">Massagem Tailandesa</option>
            <option value="11">Massagem Tântrica</option>
            <option value="12">Modeladora</option>
            <option value="13">Quick Massagem</option>
            <option value="14">Reflexologia</option>
            <option value="15">Shantala</option>
          </select>
          <div className="form-group">
            <label htmlFor="title">Data de inicio Avaliação:</label>
            <input
              type="date"
              className="form-control"
              id="title"
              required
              value={Cliente.dataInicio}
              onChange={handleInputChange}
              name="dataInicio"
            />
          </div>
          <div className="form-group">
            <li><strong>Dados pessoais de Paciente:</strong></li>

            <label htmlFor="title">Nome:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.nomeCliente}
              onChange={handleInputChange}
              name="nomeCliente"
              placeholder="Nome Completo"
            />
            <label htmlFor="title">Telefone:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.telefone}
              onChange={handleInputChange}
              name="telefone"
              placeholder=""
            />
            <label htmlFor="title">Endereço:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.enderecoCompleto}
              onChange={handleInputChange}
              name="enderecoCompleto"
              placeholder=""
            />
            <label htmlFor="title">E-mail:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.email}
              onChange={handleInputChange}
              name="email"
              placeholder="email@email.com"
            />
          </div>
          <div className="form-group">
            <strong><li>Histórico da queixa:</li></strong>
            <label htmlFor="title">Localização da Dor:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.localizacaoDor}
              onChange={handleInputChange}
              name="localizacaoDor"
              placeholder="Local"
            />
            <label>Nivel do incomodo:</label>
            <select className="form-select" aria-label="Default select example" id="title"
              required value={Cliente.incomodo}
              onChange={handleInputChange} name="incomodo">
              <option selected>Opções</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="text-center mt-3">
            <button onClick={saveCliente} className="btn btn-success ">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCliente;
