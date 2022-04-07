import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/App.css';
import logo from '../assets/logo.png';
import bsc from '../assets/binance-smart-chain.png';
import Hero from '../components/hero';
import Nav from '../components/nav';
import Top from '../assets/top-ix.png';
import Bottom from '../assets/bottom-ix.png';
import Character from '../components/character';
import Cader from '../assets/cader.png';

import champ from '../assets/characters/1.png';
import tribute from '../assets/characters/2.png';
import governor from '../assets/characters/3.png';
import random from '../assets/characters/4.png'
import Partner from '../components/partner';

import player from '../assets/player.png';

import bgVideo from '../assets/backgrounds/bg-vid.mp4';

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
            img: random,
            title: 'Warrior'
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
        {
            img: 'https://kryxivia.io/assets/img/partners/dct-logo.png',
            url: null
        },
    ]

    return (
        <div className="">
            <Nav logo={logo} />
            <img src={Top} className="img-fluid bg-top" />
            <header className="App-header">
                <Hero />
                <video autoPlay muted loop id="myVideo">
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <div id='myVidContent' className='text-center'>
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
                </div>
            </header>
            <img src={Bottom} className="img-fluid bg-bottom" />
            <img src={Top} className="img-fluid bg-top" style={{ marginTop: 5 }} />
            <section className="character-area">
                <div className='container text-center'>
                    <hr className='champ-title' />
                    <br />
                    <p>At first there was nothing and then we had MetaElite Hunger Games. By taking on the role of a MEHG champion you start you journey on Meta planet where you have to fend for yourself, mine weapons and amour along with other useful items you come across. </p>
                    <p>You then begin your travels across a land of beauty and carfully maneuvering your way past natural hazards and bandits. You will see different people, cultures and tribes, discovering a world beyond your wildest imaginations.</p>

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
                    <hr className='partner-title' />
                    <br />
                    <div className='row'>
                        {
                            partners.map((partner) => <Partner url={partner.url} img={partner.img} />)
                        }
                    </div>
                </div>
            </section>

            <img src={Bottom} className="img-fluid bg-bottom" />
            <img src={Top} className="img-fluid bg-top" style={{ marginTop: 5 }} />

            <section className='character-area'>
                <div className='container mb-5'>

                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <h3 className='token-title' style={{ textAlign: 'right' }}><b style={{ color: "#b527a0" }}>$MEHG</b></h3>
                            <p style={{ textAlign: 'justify' }}>MEHG is powered by the Binance Smart Chain (BSC) and the Inter-Planetary File System which is the base crypto currency for on-chain payment and special NFT sell events, or exchanging for in-game currency MEHGT.</p>
                        </div>
                        <div className='col-md-6'>
                            <img src={Cader} className='img-fluid' />
                        </div>
                    </div>
                    {/* <hr /> */}
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <img src={Cader} className='img-fluid' />
                        </div>
                        <div className='col-md-6'>
                            <h3 className='token-title'><b style={{ color: "#76a2f9" }}>$MEHGT</b></h3>
                            <p style={{ textAlign: 'justify' }}>MEHGT is a governance Token powered by the Binance Smart Chain (BSC) and the Inter-Planetary File System which is the online currency to play, stake and trade in the MEHG Metaverse world, it absorbs more risk and advances economic moves for MEHG gamers worldwide.</p>
                        </div>
                    </div>

                </div>

            </section>

            <img src={Bottom} className="img-fluid bg-bottom" />
            <img src={Top} className="img-fluid bg-top mt-5"/>
            <section className='character-area stats'>
                <div className='container text-center'>
                    <hr className='stats-title' />
                    <br />
                    <p>An AAA gaming experience with cinematic quality 3D special effects in an interactive open-world RPG built in DeFi.</p>
                    <p>MetaElite Hunger Games merges gaming and cryptocurrency in a unique synergy and, a fully decentralized protocol, Meta Elite Hunger Games represents a new age in gaming.</p>

                    <hr />

                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='container'>
                                <img src={player} className='img-fluid' />
                                <div className='text-center'>
                                    <small>Players online</small>
                                    <h4 className="card-title text-success">N/A</h4>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='container'>
                                <img src='https://kryxivia.io/assets/img/kxa-token_kryxivia.png' className='card-img' />
                                <div className='text-center'>
                                    <small>Players online</small>
                                    <h4 className="card-title text-danger">$1,988,871</h4>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='container'>
                                <img src='https://kryxivia.io/assets/img/kxs-token_kryxivia.png' className='card-img' />
                                <div className='text-center'>
                                    <small>Market cap</small>
                                    <h4 className="card-title text-info">$156,000</h4>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='container'>
                                <img src='https://kryxivia.io/assets/img/mineted-kryxivia.png' className='card-img' />
                                <div className='text-center'>
                                    <br /><br />
                                    <small>Meta Elite NFT Minted</small>

                                    <h4 className="card-title text-success">N/A</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Index;
