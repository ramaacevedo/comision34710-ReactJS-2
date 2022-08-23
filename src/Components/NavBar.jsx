import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img src="https://res.cloudinary.com/ramdestroyeer/image/upload/c_scale,h_50/v1661202940/logo2_jutrai.png" alt="" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to={`category/para-1-persona`}>Comida para 1 persona</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to={`category/para-2-personas`}>Comida para 2 personas</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to={`category/para-3-personas`}>Comida para 3 personas</Link>
                </li>
            </ul>
            <CartWidget />
            </div>
        </div>
    </nav>

    )
}

export default NavBar;