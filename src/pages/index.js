import { useState, useEffect } from 'react';
import YoutubeBackground from 'react-youtube-background'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/App.css';
import logo from '../assets/logo.png';
import bsc from '../assets/binance-smart-chain.png';
import Hero from '../components/hero';
import Nav from '../components/nav';
import Top from '../assets/backgrounds/top-corrected.png';
import Bottom from '../assets/backgrounds/bottom-corrected.png';
import Carousel from 'react-bootstrap/Carousel'


import champ from '../assets/characters/1.png';
import tribute from '../assets/characters/2.png';
import governor from '../assets/characters/3.png';
import random from '../assets/characters/4.png'
import Partner from '../components/partner';

import mehgt from '../assets/mehgt.png';
import mehg from '../assets/mehg.png';
import mint from '../assets/mint.png';

import Loader from '../assets/loader.gif';

// social
import linkedIn from '../assets/social/linkedin.png';
import twitter from '../assets/social/twitter.png';
import facebook from '../assets/social/facebook.png';

import player from '../assets/players.png';

import bgVideo2 from '../assets/backgrounds/bg-vid2.mp4';
import bgVideo3 from '../assets/backgrounds/bg-vid3.mp4';

import mehgtkn from '../assets/axe2.png';
import mehgttkn from '../assets/axe1.png';
// stats
import stat4 from '../assets/stats/4.png';
import stat5 from '../assets/stats/5.png';
import stat6 from '../assets/stats/6.png';
import Player from '../components/soundtrack';



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
    ];

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 16000);
    }, []);

    return (
        isLoaded ?
            <div className="container">
                <Nav logo={logo} />
                <img src={Top} className="img-fluid bg-top" />
                <YoutubeBackground videoId={"4P5aJahaqoI"} className="" overlay={"rgba(0,0,0,.4)"} nocookie={true} >
                    <header className="App-header">
                        <Hero />
                        <div className='text-center'>
                            <img src={logo} className="App-logo" alt="logo" />
                            <p>
                                <a className='btn btn-secondary btn-lg'>Seed Sale</a> &nbsp;&nbsp;&nbsp; <a className='btn btn-dark btn-lg'>Claim Airdrop</a>
                            </p>
                            <div className='row'>
                                <div className='col'>
                                    <center>Powered by</center>
                                    <img src={bsc} height={50} />
                                </div>
                            </div>
                        </div>


                    </header>
                </YoutubeBackground>
                <Player />
                <img src={Bottom} className="img-fluid bg-bottom" />
                <img src={Top} className="img-fluid bg-top" />
                <section className="character-area">
                    <video autoPlay muted loop style={{ opacity: 0.3 }}>
                        <source src={bgVideo3} type="video/mp4" />
                    </video>
                    <div className='container text-center video-content'>
                        <hr className='champ-title' />
                        <br />
                        <div className='row align-items-center'>
                            <div className='col-md-4 animate__animated animate__fadeInLeft animate__delay-2s'>
                                <Carousel indicators={false} controls={false}>
                                    {
                                        characters.map((character, index) => {
                                            return <Carousel.Item key={index}>
                                                <img src={character.img} className="d-block w-100" style={{ borderRadius: "360px" }} alt={character.title} />
                                            </Carousel.Item>;
                                        })
                                    }
                                </Carousel>
                            </div>

                            <div className='col-md-8 animate__animated animate__fadeInRight animate__delay-3s'>
                                <p>At first there was nothing and then we had MetaElite Hunger Games. By taking on the role of a MEHG champion you start you journey on Meta planet where you have to fend for yourself, mine weapons and amour along with other useful items you come across. </p>
                                <p>You then begin your travels across a land of beauty and carfully maneuvering your way past natural hazards and bandits. You will see different people, cultures and tribes, discovering a world beyond your wildest imaginations.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <img src={Bottom} className="img-fluid bg-bottom" />
                <img src={Top} className="img-fluid bg-top" />
                <section className='character-area stats'>
                    <div className='container text-center mb-5 mt-5'>

                        <hr className='stats-title' />
                        <br />
                        <p className='animate__animated animate__fadeInLeft animate__delay-4s'>An AAA gaming experience with cinematic quality 3D special effects in an interactive open-world RPG built in DeFi.</p>
                        <p className='animate__animated animate__fadeInRight animate__delay-5s'>MetaElite Hunger Games merges gaming and cryptocurrency in a unique synergy and, a fully decentralized protocol, Meta Elite Hunger Games represents a new age in gaming.</p>

                        <hr />

                        <div className='row align-items-center'>

                            <div className='col-md'>
                                <div className='container'>
                                    <img src={player} className='card-img' />
                                    <div className='text-center'>
                                        <small>Players online</small>
                                        <h4 className="card-title text-bold" style={{ color: "#D09821" }}>N/A</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md'>
                                <div className='container'>
                                    <img src={mehg} className='card-img' />
                                    <div className='text-center'>
                                        <small>Market cap</small>
                                        <h4 className="card-title text-bold" style={{ color: "#D09821" }}>N/A</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md'>
                                <div className='container'>
                                    <img src={mehgt} className='card-img' />
                                    <div className='text-center'>
                                        <small>Governance</small>
                                        <h4 className="card-title text-bold" style={{ color: "#D09821" }}>N/A</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md'>
                                <div className='container'>
                                    <img src={stat4} className='card-img' />
                                    <div className='text-center'>
                                        <small>Upgrade</small>
                                        <h4 className="card-title text-bold" style={{ color: "#D09821" }}>N/A</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>


                            <div className='col-md'>
                                <div className='container'>
                                    <img src={stat5} className='card-img' />
                                    <div className='text-center'>
                                        <small>Staking</small>
                                        <h4 className="card-title text-bold" style={{ color: "#D09821" }}>N/A</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md'>
                                <div className='container'>
                                    <img src={stat6} className='card-img' />
                                    <div className='text-center'>
                                        <small>NFT Marketplace</small>
                                        <h4 className="card-title text-bold" style={{ color: "#D09821" }}>N/A</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md'>
                                <div className='container'>
                                    <img src={mint} className='card-img' />
                                    <div className='text-center'>
                                        <small>P2E Rewards</small>
                                        <h4 className="card-title text-bold" style={{ color: "#D09821" }}>N/A</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <img src={Bottom} className="img-fluid bg-bottom" />
                <img src={Top} className="img-fluid bg-top" />

                <section className='character-area mb-5'>

                    <video autoPlay muted loop style={{ opacity: 0.1, position: 'absolute' }}>
                        <source src={bgVideo2} type="video/mp4" />
                    </video>
                    <div className='container'>

                        <div className='row align-items-bottom '>
                            <div className='col-md-5'>
                                <div className='text-center bg-polygon mb-3'>
                                    <img src={mehgtkn} className='img-fluid token-icon' />
                                </div>

                                <h3 className='token-title animate__animated animate__bounce animate__delay-3s'><b style={{ color: "#D09821" }}>$MEHG</b></h3>
                                <p style={{ textAlign: 'justify' }} className="animate__animated animate__bounce animate__delay-4s">MEHG is powered by the Binance Smart Chain (BSC) and the Inter-Planetary File System which is the base crypto currency for on-chain payment and special NFT sell events, or exchanging for in-game currency MEHGT.</p>
                            </div>
                            <div className='col-md-2'></div>
                            <div className='col-md-5'>
                                <div className='text-center bg-polygon mb-3'>
                                    <img src={mehgttkn} className='img-fluid token-icon' />
                                </div>

                                <h3 className='token-title animate__animated animate__bounce animate__delay-3s'><b style={{ color: "#d01c1f" }}>$MEHGT</b></h3>
                                <p style={{ textAlign: 'justify' }} className="animate__animated animate__bounce animate__delay-4s">MEHGT is a governance Token powered by the Binance Smart Chain (BSC) and the Inter-Planetary File System which is the online currency to play, stake and trade in the MEHG Metaverse world, it absorbs more risk and advances economic moves for MEHG gamers worldwide.</p>

                            </div>
                        </div>

                    </div>

                </section>

                <img src={Bottom} className="img-fluid bg-bottom" />
                <img src={Top} className="img-fluid bg-top" />
                <section className='character-area'>
                    <div className='container mt-5'>
                        <hr className='partner-title' />
                        <br />
                        <div className='row'>
                            {
                                partners.map((partner, index) => <Partner key={index} url={partner.url} img={partner.img} />)
                            }
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
            :
            <div className='App-header2' style={{ backgroundColor: '#000 !important' }}> <img src={Loader} className="img-fluid" /></div>
    );
}

export default Index;
