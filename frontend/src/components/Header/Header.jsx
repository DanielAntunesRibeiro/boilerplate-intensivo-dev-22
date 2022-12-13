import MarcaOcean from "../../assets/brand.svg";
import "./Header.css"

function Header(){
    return(
        <header className="cabecalho">
            <div className="container">
              <div className='row align-items-center'>
                <div className='col-1'>
                  <img src={MarcaOcean} alt="Ocean.ico" style={{height: 50}}/>
                </div>
                <div className='col-11'>
                  <a className="link">Listar</a>
                  <a className="link">Adicionar</a>
                  <a className="link">Link 3</a>
                </div>
              </div>
            </div>
        </header>
    );
};

export default Header;