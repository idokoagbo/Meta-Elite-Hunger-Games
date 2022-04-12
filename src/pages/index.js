import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/App.css';
import logo from '../assets/logo.png';
import bsc from '../assets/binance-smart-chain.png';
import Hero from '../components/hero';
import Nav from '../components/nav';
import Top from '../assets/backgrounds/top.png';
import Bottom from '../assets/backgrounds/bottom.png';
import Character from '../components/character';
import Carousel from 'react-bootstrap/Carousel'

import champ from '../assets/characters/1.png';
import tribute from '../assets/characters/2.png';
import governor from '../assets/characters/3.png';
import random from '../assets/characters/4.png'
import Partner from '../components/partner';

import mehgt from '../assets/mehgt.png';
import mehg from '../assets/mehg.png';

// social
import linkedIn from '../assets/social/linkedin.png';
import twitter from '../assets/social/twitter.png';
import facebook from '../assets/social/facebook.png';

import player from '../assets/players.png';

import bgVideo from '../assets/backgrounds/bg-vid.mp4';
import bgVideo2 from '../assets/backgrounds/bg-vid2.mp4';
import bgVideo3 from '../assets/backgrounds/bg-vid3.mp4';

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
                <div className='text-center video-content'>
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
            {/* <img src={Bottom} className="img-fluid bg-bottom" /> */}
            <img src={Top} className="img-fluid bg-top" style={{ marginTop: 5 }} />
            <section className="character-area">
                <video autoPlay muted loop style={{ opacity: 0.2 }}>
                    <source src={bgVideo3} type="video/mp4" />
                </video>
                <div className='container text-center video-content'>
                    <hr className='champ-title' />
                    <br />
                    <div className='row align-items-center'>
                        <div className='col-md-4'>
                            <Carousel indicators={false}>
                                {
                                    characters.map((character, index) => {
                                        return <Carousel.Item>
                                            <img src={character.img} className="d-block w-100" alt={character.title} />
                                        </Carousel.Item>;
                                    })
                                }
                            </Carousel>
                            {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {
                                        characters.map((character, key) => <div className="carousel-item active">
                                            <img className="d-block w-100" src={character.img} alt={character.title} />
                                        </div>)
                                    }
                                </div>
                            </div> */}
                            {/* {
                                characters.map((character) => <Character title={character.title} img={character.img} />)
                            } */}
                        </div>

                        <div className='col-md-8'>
                            <p>At first there was nothing and then we had MetaElite Hunger Games. By taking on the role of a MEHG champion you start you journey on Meta planet where you have to fend for yourself, mine weapons and amour along with other useful items you come across. </p>
                            <p>You then begin your travels across a land of beauty and carfully maneuvering your way past natural hazards and bandits. You will see different people, cultures and tribes, discovering a world beyond your wildest imaginations.</p>
                        </div>
                    </div>
                </div>
            </section>
            <img src={Bottom} className="img-fluid bg-bottom" />
            {/* <img src={Top} className="img-fluid bg-top" style={{ marginTop: 5 }} /> */}
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

            {/* <img src={Bottom} className="img-fluid bg-bottom" /> */}
            <img src={Top} className="img-fluid bg-top" style={{ marginTop: 5 }} />

            <section className='character-area'>
                <video autoPlay muted loop style={{ opacity: 0.2 }}>
                    <source src={bgVideo2} type="video/mp4" />
                </video>
                <div className='container mb-5 video-content'>

                    <div className='row align-items-center justify-content-center'>

                        <div className='col-md-5'>
                            <img src={mehg} className='img-fluid token-icon' />
                            <h3 className='token-title'><b style={{ color: "#D09821" }}>$MEHG</b></h3>
                            <p style={{ textAlign: 'justify' }}>MEHG is powered by the Binance Smart Chain (BSC) and the Inter-Planetary File System which is the base crypto currency for on-chain payment and special NFT sell events, or exchanging for in-game currency MEHGT.</p>
                        </div>
                        <div className='col-md-5'>
                            <img src={mehgt} className='img-fluid token-icon' />
                            <h3 className='token-title'><b style={{ color: "#d01c1f" }}>$MEHGT</b></h3>
                            <p style={{ textAlign: 'justify' }}>MEHGT is a governance Token powered by the Binance Smart Chain (BSC) and the Inter-Planetary File System which is the online currency to play, stake and trade in the MEHG Metaverse world, it absorbs more risk and advances economic moves for MEHG gamers worldwide.</p>

                        </div>
                    </div>

                </div>

            </section>

            <img src={Bottom} className="img-fluid bg-bottom" />
            {/* <img src={Top} className="img-fluid bg-top mt-5"/> */}
            <section className='character-area stats'>
                <div className='container text-center'>
                    <hr className='stats-title' />
                    <br />
                    <p>An AAA gaming experience with cinematic quality 3D special effects in an interactive open-world RPG built in DeFi.</p>
                    <p>MetaElite Hunger Games merges gaming and cryptocurrency in a unique synergy and, a fully decentralized protocol, Meta Elite Hunger Games represents a new age in gaming.</p>

                    <hr />

                    <div className='row align-items-center'>
                        <div className='col-md-3'>
                            <div className='container'>
                                <img src={player} className='card-img' />
                                <div className='text-center'>
                                    <small>Players online</small>
                                    <h4 className="card-title text-success text-bold">N/A</h4>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='container'>
                                <img src={mehg} className='card-img' />
                                <div className='text-center'>
                                    <small>Players online</small>
                                    <h4 className="card-title text-danger text-bold">N/A</h4>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='container'>
                                <img src={mehgt} className='card-img' />
                                <div className='text-center'>
                                    <small>Market cap</small>
                                    <h4 className="card-title text-info text-bold">N/A</h4>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='container'>
                                <img src='https://kryxivia.io/assets/img/mineted-kryxivia.png' className='card-img' />
                                <div className='text-center'>
                                    <br /><br />
                                    <small>Meta Elite NFT Minted</small>
                                    <h4 className="card-title text-success text-bold">N/A</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className='bg-dark text-light' style={{ padding: '25px' }}>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-4'>
                            <h1 style={{ fontWeight: '700', fontSize: '24px', lineHeight: '46px' }}>META ELITE HUNGER GAMES</h1>
                            <h4 style={{ fontWeight: '700', fontSize: '18px', lineHeight: '28px', color: 'rgba(255, 255, 255, 0.5)' }}>AAA gaming experience</h4>
                        </div>
                        <div className='col-md'>
                            <div className='row'>
                                <div className='col-md mb-1'>
                                    <a href="/gallery" style={{ padding: '10px', textDecoration: 'none', color: "#fff", fontWeight: '700', fontSize: '18px', lineHeight: '20px' }}>Gallery</a>
                                </div>
                                <div className='col-md mb-1'>
                                    <a href="/about" style={{ padding: '10px', textDecoration: 'none', color: "#fff", fontWeight: '700', fontSize: '18px', lineHeight: '20px' }}>About</a>
                                </div>
                                <div className='col-md mb-1'>
                                    <a href="" style={{ padding: '10px', textDecoration: 'none', color: "#fff", fontWeight: '700', fontSize: '18px', lineHeight: '20px' }}>Docs</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className='row'>
                                <div className='col'>
                                    <img src={twitter} className="img-fluid" />
                                </div>
                                <div className='col'>
                                    <img src={facebook} className="img-fluid" />
                                </div>
                                <div className='col'>
                                    <img src={linkedIn} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Index;
