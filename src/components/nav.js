import 'bootstrap/dist/css/bootstrap.min.css';

function Nav(props) {
    return <nav className="navbar navbar-dark navbar-expand-lg fixed-top shadow">
        <div className='container-fluid'>
            <a
                className="navbar-brand"
                href="/"
                rel="noopener noreferrer"
            >
                <img src={props.logo} height={50} className="d-inline-block align-top" alt='brand-logo' />
                <span style={{ fontSize: '24px', fontWeight: '700', lineHeight: '46px' }} className='d-none d-md-inline'> Meta Elite Hunger Games </span>
                <span style={{ fontSize: '24px', fontWeight: '700', lineHeight: '46px' }} className='d-inline d-md-none'> MEHG </span>
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
                        <a className="nav-link" href="/whitepaper">Whitepaper</a>
                    </li>

                </ul>

            </div>
        </div>
    </nav>;
}


export default Nav;