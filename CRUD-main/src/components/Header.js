import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenProduto, setIsOpenProduto] = useState(false)
  const [isOpenCliente, setIsOpenCliente] = useState(false)

  return (
    <header className=''>
      <nav className="navbar navbar-expand navbar-dark bg-white">
        <li className="nav-item active mr-5">
          <Link to={'/'} className="nav-link text-dark h3">Masso<span className="text-danger">terapia</span></Link>
        </li>
        <div className="navbar-nav mr-auto">
          <div className="d-flex " isOpen={isOpen} >
            <li onClick={() => setIsOpen(!isOpen)} className="dropdown-toggle" id="dropdownMenuButton">
              Funcionario
            </li>
            {isOpen && (
              <div className="menu-dropdown shadow p-3 bg-white rounded mt-4" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to="/funcionario">Lista Funcionario</Link>
                <Link className=" dropdown-item" to="/add">Adicionar Funcionario</Link>
              </div>
            )}
          </div>
          <div className="d-flex" isOpenProduto={isOpenProduto}>
            <li onClick={() => setIsOpenProduto(!isOpenProduto)} className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
              Produto
            </li>
            {isOpenProduto && (
              <div className="menu-dropdown shadow p-3 bg-white rounded mt-4" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to="/produto">Lista Produtos</Link>
                <Link className=" dropdown-item" to="/addproduto">Adicionar Produto</Link>
              </div>
            )}
          </div>
          <div className="d-flex" isOpenCliente={isOpenCliente}>
            <li onClick={() => setIsOpenCliente(!isOpenCliente)} className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
              Cliente
            </li>
            {isOpenCliente && (
              <div className="menu-dropdown shadow p-3 bg-white rounded mt-4" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to="/Cliente">Lista Pacientes</Link>
                <Link className=" dropdown-item" to="/addCliente">Adicionar Paciente</Link>
              </div>
            )}
          </div>
          <div>
            <li className="nav-item nav-link text-dark h6 mb-0">
              Bem vindo Administrador
            </li>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header;