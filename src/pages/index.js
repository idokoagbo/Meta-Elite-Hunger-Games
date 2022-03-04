import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import bsc from '../assets/binance-smart-chain.png';
import '../assets/css/App.css';
import Hero from '../components/hero';
import Nav from '../components/nav';
import Top from '../assets/top-ix.png';
import Bottom from '../assets/bottom-ix.png';
import Character from '../components/character';

import champ from '../assets/characters/champ.png';
import tribute from '../assets/characters/tribute.png';
import governor from '../assets/characters/governor.png';
import Partner from '../components/partner';

function Index() {

    const characters = [
        {
            img: champ,
            title: "Champion"
        },
        {
            img: tribute,
            title: "Tribute"
        },
        {
            img: governor,
            title: 'Governor'
        },
        {
            img: governor,
            title: 'Random'
        },
    ];

    const partners = [
        {
            img: 'https://kryxivia.io/assets/img/partners/unicrypt.svg',
            url: null
        },
        {
            img: 'https://kryxivia.io/assets/img/partners/bakery.png',
            url: null
        },
        {
            img: 'https://kryxivia.io/assets/img/partners/enjinstarter.png',
            url: null
        },
        {
            img: 'https://kryxivia.io/assets/img/partners/poolz.png',
            url: null
        },
        {
            img: 'https://kryxivia.io/assets/img/partners/dextool.png',
            url: null
        },
        {
            img: 'https://kryxivia.io/assets/img/partners/poly-network.svg',
            url: null
        },
        {
            img: 'https://kryxivia.io/assets/img/partners/ajoobz.png',
            url: null
        },
        {
            img: 'https://kryxivia.io/assets/img/partners/dct-logo.png',
            url: null
        },
        {
            img: 'https://kryxivia.io/assets/img/partners/defiboost-logo.png',
            url: null
        },
        {
            img: 'https://kryxivia.io/assets/img/partners/checkdot.svg',
            url: null
        },
        {
            img: 'https://kryxivia.io/assets/img/partners/locklet.svg',
            url: null
        },
        {
            img: 'https://kryxivia.io/assets/img/partners/maxx.png',
            url: null
        },
        {
            img: 'https://kryxivia.io/assets/img/partners/vespertine.png',
            url: null
        },
        {
            img: 'https://kryxivia.io/assets/img/partners/avg.svg',
            url: null
        },
    ]

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
                        <img src='https://raw.githubusercontent.com/idokoagbo/Meta-Elite-Hunger-Games/769421621928b651d12382e460841381120f53ea/src/assets/unity.svg' height={50} />
                    </div>
                    <div className='col'>
                        <center>Powered by</center>
                        <img src={bsc} height={50} />
                    </div>
                </div>
            </header>
            <img src={Bottom} className="img-fluid bg-bottom" />
            <img src={Top} className="img-fluid bg-top" style={{ marginTop: 5 }} />
            <section className="character-area">
                <div className='container'>
                    <h1 className='text-center'>MEHG Champions</h1>
                    <div className='row'>
                        {
                            characters.map((character) => <Character title={character.title} img={character.img} />)
                        }
                    </div>
                </div>
            </section>
            <img src={Bottom} className="img-fluid bg-bottom" />
            <img src={Top} className="img-fluid bg-top" style={{ marginTop: 5 }} />
            <section className='character-area'>
                <div className='container'>
                    <h4 className='text-center'>Our partners</h4>
                    <div className='row'>
                        {
                            partners.map((partner) => <Partner url={partner.url} img={partner.img} />)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Index;
