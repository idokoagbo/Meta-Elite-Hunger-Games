import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import bsc from '../assets/binance-smart-chain.png';
import '../assets/css/App.css';
import Hero from '../components/hero';
import Nav from '../components/nav';

function Index() {
    return (
        <div className="App">
            <Nav logo={logo} />
            <header className="App-header">
                <Hero />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <a className='btn btn-secondary btn-lg'>Seed Sale</a> &nbsp; <a className='btn btn-dark btn-lg'>Claim Airdrop</a>
                </p>
                <div className='row'>
                    <div className='col'>
                        <p>Designed with</p>
                        <img src='https://raw.githubusercontent.com/Kryxivia/Kryxivia.Website/414432bd650657cb09f4952e64bd555af16aa78f/assets/img/unity.svg' height={50} />
                    </div>
                    <div className='col'>
                        <p>Powered by</p>
                        <img src={bsc} height={50} />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Index;
