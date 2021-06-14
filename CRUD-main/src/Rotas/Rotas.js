import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import AddFuncionario from "../components/Funcionario/AddFuncionario";
import Funcionario from "../components/Funcionario/Funcionario";
import FuncionariosList from "../components/Funcionario/FuncionariosList";
import ProdutoList from "../components/Produto/ProdutoList";
import AddProduto from "../components/Produto/AddProduto";
import Produto from "../components/Produto/Produto";
import AddCliente from "../components/Cliente/AddCliente";
import Cliente from "../components/Cliente/Cliente";
import ClientesList from "../components/Cliente/ClientesList";

const Rotas = () => {
  return (
    <div>
      <Switch>
        {/* Rotas Funcionario */}
        <Route exact path={["/", "/massoterapia"]} component={Home}></Route>
        <Route path="/funcionario" component={FuncionariosList} />
        <Route exact path="/add" component={AddFuncionario} />
        <Route path="/funcionarios/:id" component={Funcionario} />
        {/* Rotas Produtos */}
        <Route path="/produto" component={ProdutoList} />
        <Route exact path="/addProduto" component={AddProduto} />
        <Route path="/Produtos/:id" component={Produto} />
        {/* Rotas Cliente */}
        <Route path="/Cliente" component={ClientesList} />
        <Route path="/addCliente" component={AddCliente} />
        <Route path="/Clientes/:id" component={Cliente} />
      </Switch>         
    </div>
  )
}

export default Rotas;