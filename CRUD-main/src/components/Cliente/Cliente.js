import React, { useState, useEffect } from "react";
import ClienteDataService from "../../services/Cliente/clienteDataServiceRest";
import { Link } from "react-router-dom";
import Header from '../Header'

// Inicializando os valores
const Cliente = props => {
  const initialClienteState = {
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
    vicio: "",
    med: "",
    queix: "",
    historicoFamiliar: "",
    patologia: "",
    comentario: "",
    published: "Unpublished",
  };
  const [message, setMessage] = useState("");
  const [currentCliente, setCurrentCliente] = useState(initialClienteState);
  // obter todos os clientes
  const getCliente = id => {
    ClienteDataService.get(id)
      .then(response => {
        setCurrentCliente(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    getCliente(props.match.params.id);
    return () => {
      setMessage({})
    }
  }, [props.match.params.id]);
  // useEffect(()=>{
  //   const data = ClienteDataService.getById(key)
  //   console.log(key)
  //   setCurrentCliente(data[0])     
  // }, [])
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentCliente({ ...currentCliente, [name]: value });
  };

  const updatePublished = status => {
    const data = {
      id: currentCliente.id,
      title: currentCliente.title,
      description: currentCliente.description,
      nomeAtendente: currentCliente.nomeAtendente,
      proficional: currentCliente.proficional,
      dataInicio: currentCliente.dataInicio,
      dataConsulta: currentCliente.dataConsulta,
      localizacaoDor: currentCliente.localizacaoDor,
      intensidade: currentCliente.intensidade,
      tempo: currentCliente.tempo,
      tratamento: currentCliente.tratamento,
      medicamento: currentCliente.medicamento,
      quaisAlergias: currentCliente.quaisAlergias,
      alergias: currentCliente.alergias,
      incomodo: currentCliente.incomodo,
      ocorrencia: currentCliente.ocorrencia,
      habitos: currentCliente.habitos,
      nomeCliente: currentCliente.nomeCliente,
      estadoCivil: currentCliente.estadoCivil,
      profissao: currentCliente.profissao,
      telefone: currentCliente.telefone,
      enderecoCompleto: currentCliente.enderecoCompleto,
      email: currentCliente.email,
      vicio: currentCliente.vicio,
      med: currentCliente.med,
      queix: currentCliente.queix,
      historicoFamiliar: currentCliente.historicoFamiliar,
      patologia: currentCliente.patologia,
      comentario: currentCliente.comentario,
      published: status
    };
    ClienteDataService.update(currentCliente.id, data)
      .then(response => {
        setCurrentCliente({ ...currentCliente, published: status });
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
  };
  //Atualizar cliente 
  const updateCliente = () => {
    
    ClienteDataService.update(currentCliente.id, currentCliente)
      .then(response => {
        console.log(response);
        setMessage("Paciente atualizado com sucesso!");
      })
      .catch(e => {
        console.log(e);
      });
    //console.log(currentCliente)
    // const data = {
    //   nomeCliente: currentCliente.nomeCliente,
    //   estadoCivil: currentCliente.estadoCivil,
    //   profissao: currentCliente.profissao,
    //   telefone: currentCliente.telefone,
    //   enderecoCompleto: currentCliente.enderecoCompleto,
    //   email: currentCliente.email,

    //   nomeAtendente: currentCliente.nomeAtendente,
    //   proficional: currentCliente.proficional,
    //   dataInicio: currentCliente.dataInicio,
    //   dataConsulta: currentCliente.dataConsulta,
    //   localizacaoDor: currentCliente.localizacaoDor,
    //   intensidade: currentCliente.intensidade,
    //   tempo: currentCliente.tempo,
    //   tratamento: currentCliente.tratamento,
    //   medicamento: currentCliente.medicamento,
    //   quaisAlergias: currentCliente.quaisAlergias,
    //   alergias: currentCliente.alergias,
    //   incomodo: currentCliente.incomodo,
    //   ocorrencia: currentCliente.ocorrencia,
    //   habitos: currentCliente.habitos,
    //   vicio: currentCliente.vicio,
    //   med: currentCliente.med,
    //   queix: currentCliente.queix,
    //   historicoFamiliar: currentCliente.historicoFamiliar,
    //   patologia: currentCliente.patologia,
    //};  
    // ClienteDataService.update(key, data);
    // setCurrentCliente(data)
  };
  // deletar cliente
  const deleteCliente = () => {
    console.log(currentCliente)
    if (window.confirm('Deseja excluir?')) {
      ClienteDataService.remove(currentCliente.id)
        .then(response => {
          console.log(response.data);
          props.history.push("/clientes");
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  return (
    <div>
      <Header />
      {currentCliente ? (
        // formulario
        <div id="contents">
          <div className="col-sm text-center">
            <h1><dt>Ficha de Paciente</dt></h1>
          </div>
          <form className="form">
            <div className="form-group">
              <label htmlFor="nomeCliente">Nome Paciente</label>
              <input
                type="text"
                className="form-control"
                id="nomeCliente"
                name="nomeCliente"
                value={currentCliente.nomeCliente}
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
                value={currentCliente.telefone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={currentCliente.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="nomeAtendente">Atendente</label>
              <input
                type="text"
                className="form-control"
                id="nomeAtendente"
                name="nomeAtendente"
                value={currentCliente.nomeAtendente}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dataInicio">Data de inicio Avaliação</label>
              <input
                type="text"
                className="form-control"
                id="dataInicio"
                name="dataInicio"
                value={currentCliente.dataInicio}
                onChange={handleInputChange}
              />
            </div>
            <label>Profissional Indicado:</label>
            <select className="form-select" aria-label="Default select example"
              name="proficional" value={currentCliente.proficional}
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

              <label htmlFor="title">Endereço:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={currentCliente.enderecoCompleto}
                onChange={handleInputChange}
                name="enderecoCompleto"
                placeholder=""
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
                value={currentCliente.localizacaoDor}
                onChange={handleInputChange}
                name="localizacaoDor"
                placeholder="Local"
              />
              
            </div>
            <div className="form-group">
              <label htmlFor="title">Intensidade:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={currentCliente.intensidade}
                onChange={handleInputChange}
                name="intensidade"
                placeholder="Fale um pouco sobre a intensidade da dor"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Tempo:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={currentCliente.tempo}
                onChange={handleInputChange}
                name="tempo"
                placeholder="Tempo da dor"
              />
              
            </div>
      
            <div className="form-group">
              <label htmlFor="title">Tratamentos já realizados:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={currentCliente.tratamento}
                onChange={handleInputChange}
                name="tratamento"
                placeholder=""
              />
            </div>
     
            
            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentCliente.published ? "Published" : "Pending"}
            </div>
          </form>
          <div className="text-center">
            {currentCliente.published ? (
              <button
                className="btn btn-success mr-2"
                onClick={() => updatePublished(false)}
              >
                Cancelar
              </button>
            ) : (
              <button
                className="btn btn-success mr-2"
                onClick={() => updatePublished(true)}
              >
                Publicar
              </button>
            )}
            <Link to="/Cliente">
              <button className="btn btn-danger mr-2" onClick={deleteCliente}>
                Deletar
              </button>
            </Link>

            <a href="/Cliente">
              <button
                type="submit"
                className="btn btn-warning"
                onClick={updateCliente}
              >
                Atualizar
              </button>
            </a>
            <p>{message}</p>
          
          </div>
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

export default Cliente;
