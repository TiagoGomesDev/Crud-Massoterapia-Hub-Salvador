import React, { useState, useEffect } from 'react';
import massagemSobre from '../assets/massagemSobre.jpg'
import shiatsu from '../assets/shiatsu.jpg'
import massagemRelaxante from '../assets/massagemRelaxante.jpg'
import reflexologiaPodal from '../assets/reflexologiaPodal.jpg'
import Footer from './Footer';
import { Link } from 'react-router-dom';

// função para a validação dos dados
function useFormik({
  initialValues,
  validate
}) {
  const [touched, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);
  
  useEffect(() => {
    validateValues(values);
  }, [values]);
  
  //funcão para pegar os valores
  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    const { value } = event.target;
    setValues({
      ...values,
      [fieldName]: value,
    });
  }
  function handleBlur(event) {
    const fieldName = event.target.getAttribute('name');
    console.log(fieldName);
    setTouchedFields({
      ...touched,
      [fieldName]: true,
    })
  }
  // seta os erros
  function validateValues(values) {
    setErrors(validate(values));
  }
  return {
    values,
    errors,
    touched,
    handleBlur,
    setErrors,
    handleChange,
  };
}

const Home = (props) => {
  const [acessar, setAcessar] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      userEmail: '',
      userPassword: '',
    },
    validate: function (values) {
      const errors = {};
      if (!values.userEmail.includes('@')) {
        errors.userEmail = 'Insira um email valido';
      }
      if (values.userPassword !== "123456" && values.userEmail !== 'admin@admin.com') {
        errors.userPassword = 'Insira uma senha valida'
        setAcessar(false)
      }
      if (values.userPassword === "123456" && values.userEmail === 'admin@admin.com') {
        setAcessar(true)
      }
      return errors;
    }
  });
  useEffect(() => {
    if (formik.values.userPassword === "123456" && formik.values.userEmail === 'admin@admin.com') {
      setAcessar(true)
    } else {
      setAcessar(false)
    }

  }, [formik.values]);
  return (
    <div>
      {/* Menu principal */}
      <header className="navbar navbar-expand navbar-dark bg-white">
        <li className="nav-item active mr-5">
          <Link to={'/'} className="nav-link text-dark font-weight-bold h3">Masso<span className="text-menu">terapia</span></Link>
        </li>
        <li className="nav-item active mr-5">
          <Link to={'/'} className="nav-link text-dark h6">Home</Link>
        </li>
        <li className="nav-item active mr-5">
          <a href="#sobre" className="nav-link text-dark h6">Sobre</a>
        </li>
        <li className="nav-item active mr-5">
          <a href='#servicos' className="nav-link text-dark h6">Serviços</a>
        </li>
        <div className="collapse navbar-collapse justify-content-end">
          <button className="btn btn-danger modalEntrar" onClick={() => setModalOpen(true)}>
            Login
          </button>
          {/* Modal  */}
          {modalOpen && (
            <div className="Modal ModalLogin" tabIndex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Bem vindo</h5>
                    <button type="button" className="close" onClick={() => setModalOpen(false)} data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={(event) => {
                      event.preventDefault();
                      console.log(formik.values);
                    }}>
                      <div className="formField">
                        <label htmlFor="userEmail">
                          E-mail:
                        </label>
                        <input
                          type="text"
                          placeholder="email@example.com"
                          className="form-control"
                          name="userEmail"
                          id="userEmail"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.userEmail}
                        />
                        {formik.touched.userEmail && formik.errors.userEmail && <span className="formField__error">{formik.errors.userEmail}</span>}
                      </div>
                      <div className="formField">
                        <label htmlFor="userPassword">
                          Senha:
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Senha"
                          name="userPassword"
                          id="userPassword"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.userPassword}
                        />
                        {formik.touched.userPassword && formik.errors.userPassword && <span className="formField__error">{formik.errors.userPassword}</span>}
                      </div>
                      {acessar ? (
                        <Link to="/funcionario">
                          <button className="btn btn-danger" type="submit">
                            Entrar
                          </button>
                        </Link>) : (
                        <button className="btn btn-danger" disabled type="submit">
                          Entrar
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
            //Final do modal
          )}
        </div>
      </header>
      {/* Final do menu principal */}
      {/* começo da seção de apresentação */}
      <section className="bg-img">
        <div className="color">
          <div className="col-xl-6">
            <h1 className="mx-5 h1 w-50 text-white">Neque debitis exercitationem  soluta quos</h1>
            <h2 className="mx-5 h4 w-70 text-white">sed do eiusmod tempor incididunt ut labore et dolore </h2>
            <button className="mx-5 btn btn-danger "><a href="#sobre" className="text-white text-decoration-none scrollto">Get Started</a></button>
          </div>
        </div>
      </section>
      {/* final da seção de apresentação */}
      {/* começo da seção de sobre */}
      <section id="sobre" className="mt-5">
        <div className="tab-pane" id="tab-2">
          <div className="row mx-auto sobre">
            <h2 className="text-center h1 mb-3">Sobre</h2>
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 ">
              <h3 className="text-dark">Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h3>

              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul className="list-ul">
                <li><i className="list-li ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="list-li ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="list-li ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                <li><i className="list-li ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
              </ul>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center">
              <img src={massagemSobre} alt="massagem" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/* Final da seção de sobre */}
      {/* Começo da seção de serviços */}
      <section id="servicos" className="mt-5 ">
        <h2 className="text-center mb-3">Serviços</h2>
        <div className="row mx-md-n5">
          <div className="col px-md-5">
            <p>Shiatsu</p>
            <img className="img-servicos" src={shiatsu} alt="shiatsu" />
          </div>
          <div className="col px-md-5">
            <p>Massagem Relaxante</p>
            <img className="img-servicos" src={massagemRelaxante} alt="massagem Relaxante" />
          </div>
          <div className="col px-md-5">
            <p>Reflexologia Podal</p>
            <img className="img-servicos" src={reflexologiaPodal} alt="reflexologia Podal" />
          </div>
        </div>
      </section>
      {/* final da seção de serviços */}
      {/* começo da seção de feedback */}
      <section>

      </section>

      {/* final da seção de feedback */}
      {/* Rodape */}
      <Footer />
    </div>

  );
}

export default Home;








