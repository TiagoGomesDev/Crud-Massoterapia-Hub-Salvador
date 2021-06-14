import React from 'react'
// rodape da pagina
const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="footer-top bg-dark text-white mt-5 p-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                {/* Localizaão e o email */}
                <h3>Masso<span className="text-danger">terapia</span></h3>
                <p>
                  108 Barra
                  Bahia, Salvador 535022
                  Imperio
                  <strong>Email:</strong><p>massoterapia@example.com</p>
                </p>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                {/* Links para as seções */}
                <h4>Todos os links</h4>
                <ul className="list-ul-Footer">
                  <li className="list-li-Footer "><i class="bx bx-chevron-right"></i> <a className="text-secondary text-decoration-none" href="/">Home</a></li>
                  <li className="list-li-Footer"><i class="bx bx-chevron-right"></i> <a className="text-secondary  text-decoration-none"href="#sobre">Sobre-nós</a></li>
                  <li className="list-li-Footer"><i class="bx bx-chevron-right"></i> <a className="text-secondary text-decoration-none"href="#servicos">Serviços</a></li>
                  <li className="list-li-Footer"><i class="bx bx-chevron-right"></i> <a className="text-secondary text-decoration-none"href="/">Termo de serviços</a></li>
                  <li className="list-li-Footer"><i class="bx bx-chevron-right"></i> <a className="text-secondary text-decoration-none"href="/">Politica de privacidade</a></li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 footer-links ">
                {/* Desenvolvedores do projeto */}
                <h4>Desenvolvedores</h4>
                <ul className="list-ul-Footer">
                  <li className="list-li-Footer"><i class="bx bx-chevron-right"></i> <a className="text-secondary text-decoration-none"rel="noopener noreferrer" target="_blank" href="https://github.com/alcimarw?tab=repositories">Alcimar</a></li>  
                  <li className="list-li-Footer"><i class="bx bx-chevron-right"></i> <a className="text-secondary text-decoration-none"rel="noopener noreferrer" target="_blank" href="https://github.com/silvaalejesus">Alessandra</a></li>
                  <li className="list-li-Footer"><i class="bx bx-chevron-right"></i> <a className="text-secondary text-decoration-none"rel="noopener noreferrer" target="_blank" href="https://github.com/EdsonMSF-DEV?tab=repositories">Edson</a></li>
                  <li className="list-li-Footer"><i class="bx bx-chevron-right"></i> <a className="text-secondary text-decoration-none"rel="noopener noreferrer" target="_blank" href="https://github.com/joaovictorbrito">João Victor</a></li>
                  <li className="list-li-Footer"><i class="bx bx-chevron-right"></i> <a className="text-secondary text-decoration-none"rel="noopener noreferrer" target="_blank" href="https://github.com/TiagoGomesDev?tab=repositories">Tiago Gomes</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer