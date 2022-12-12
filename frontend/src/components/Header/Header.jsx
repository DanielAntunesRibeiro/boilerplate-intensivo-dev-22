import MarcaOcean from "../../assets/brand.svg";

function Header(){
    return(
        <header>
            <div className="container">
              <div className='row align-items-center'>
                <div className='col-2'>
                  <img src={MarcaOcean} alt="Ocean.ico" style={{height: 50}}/>
                </div>
                <div className='col-10'>
                  <a>Link 1</a>
                  <a>Link 2</a>
                  <a>Link 3</a>
                </div>
              </div>
            </div>
        </header>
    );
};

export default Header;