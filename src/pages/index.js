import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import bsc from '../assets/binance-smart-chain.png';
import '../assets/css/App.css';
import Hero from '../components/hero';
import Nav from '../components/nav';
import Top from '../assets/top-ix.png';
import Bottom from '../assets/bottom-ix.png';
import bg from '../assets/bg-2.jpg';

import champ from '../assets/characters/champ.png';
import tribute from '../assets/characters/tribute.png';
import governor from '../assets/characters/governor.png';

function Index() {
    return (
        <div className="">
            <Nav logo={logo} />
            <img src={Top} className="img-fluid bg-top" />
            <header className="App-header">
                <Hero />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <a className='btn btn-secondary btn-lg'>Seed Sale</a> &nbsp; <a className='btn btn-dark btn-lg'>Claim Airdrop</a>
                </p>
                <div className='row'>
                    <div className='col'>
                        <center>Designed with</center>
                        <img src='https://raw.githubusercontent.com/Kryxivia/Kryxivia.Website/414432bd650657cb09f4952e64bd555af16aa78f/assets/img/unity.svg' height={50} />
                    </div>
                    <div className='col'>
                        <center>Powered by</center>
                        <img src={bsc} height={50} />
                    </div>
                </div>
            </header>
            <img src={Bottom} className="img-fluid bg-bottom" />
            {/* <img src={bg} className="img-fluid" style={{ height: 120, width: '100%' }} />
            <img src={Top} className="img-fluid bg-top" style={{ marginTop: 5 }} /> */}
            <div class="character-area">
                <div className='container'>
                    <div className="row">
                        <div className="col-md-8">
                            <h1>MEHG Champions</h1>
                            <p>
                                Meta Elite Hunger Games Champions consist of demi gods and powerful ancient warriors that wield immense powers capable of protecting their district and the people these characters include the tributes, the governing bodies and the community in whole, they are called the MEHG champions.
                            </p>
                        </div>
                        <div className='col-md-4'>
                            <div className='character'>
                                <img src={champ} width={200} className='img-fluid' />
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className='col-md-4'>
                            <div className='character'>
                                <img src={tribute} width={200} className='img-fluid' />
                            </div>

                        </div>
                        <div className="col-md-8">
                            <h1>Tributes</h1>
                            <p>
                                Tributes are expirenced warriors with strong will power and horned fighting techniques warriors amongst every clan. Players can purchase the tributes NFTs from the HungergamesDEX or qualify to become a NFT holder.
                            </p>
                            <p>
                                Gain access to enhanced character features, cool character skins and a collection of legendary weaponry.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <h1>Governors</h1>
                            <p>
                                Governors  are derived from Demi gods and some of the greatest ancient warriors from the various tribes, they all wield immense powers and terrifying strengths which makes them worthy of being rulers of the districts.
                            </p>
                            <p>
                                They adventure to other districts and try to exploit these districts, the governors will clash and battle for territory and land to expand their districts. These battles are wild and very intense confrontations to the death.
                            </p>
                        </div>
                        <div className='col-md-4'>
                            <div className='character'>
                                <img src={governor} width={200} className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
