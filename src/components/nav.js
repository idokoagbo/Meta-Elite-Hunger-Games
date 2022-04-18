import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo1.png';
import whitepaper from '../assets/whitepaper.pdf';

function Nav(props) {
    return <nav className="navbar navbar-dark navbar-expand-lg fixed-top shadow">
        <div className='container-fluid'>
            <a
                className="navbar-brand"
                href="/"
                rel="noopener noreferrer"
            >
                <img src={logo} height={50} className="d-inline-block align-top" alt='brand-logo' />
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/docs">Docs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/gallery">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" target="_blank" href={whitepaper}>Whitepaper</a>
                    </li>

                </ul>

            </div>
        </div>
    </nav>;
}


export default Nav;