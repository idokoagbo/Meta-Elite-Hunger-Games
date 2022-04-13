import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/App.css';
import Nav from '../components/nav';
import logo from '../assets/logo.png';
import Top from '../assets/backgrounds/top.png';
import Bottom from '../assets/backgrounds/bottom.png';
import Hero from '../components/hero';
import Player from '../components/soundtrack';

//team photos

import team1 from '../assets/team/1.png';
import team2 from '../assets/team/2.png';
import team3 from '../assets/team/3.png';
import team4 from '../assets/team/4.png';

// game team
import g1 from '../assets/team/g1.png';
import g2 from '../assets/team/g2.png';
import g3 from '../assets/team/g3.png';
import g4 from '../assets/team/g4.png';

// others
import a1 from '../assets/team/a1.png';
import a2 from '../assets/team/a2.png';
import s1 from '../assets/team/s1.png';
import s2 from '../assets/team/s2.png';
function About() {
    return <>
        <Nav logo={logo} />
        <img src={Top} className="img-fluid bg-top" />
        <Hero />
        <br /><br />
        <section className='character-area'>
            <div className='container'>
                <hr className='about-title' />
                <br />
                <p>Inspired by the first major COVID-19 outbreak Lockdown, the struggle for survival in the Ukraine/Russian war and the fight survival in most parts of Africa, India and Asia, the Meta Elite Hunger Games is a Metaverse Game-Fi P2E project that gives you an AAA gaming experience with no limits to achievable rewards.</p>
                <br /><br />
                <hr className='team-title' />
                <p><br /></p>
                <div className='row mb-5 align-items-center'>
                    <div className='col-md-3'>
                        <img src={team1} className='img-fluid' />
                    </div>
                    <div className='col-md-9'>
                        <h3 className='token-title mb-3'><b style={{ color: "#D09821" }}>Harbin Lee - Director of Operations</b></h3>
                        <p>Mrs Harbin Lee has more than 10 years of experience in business and investment in technology projects in Netherlands and around the world. she used to be the CEO of MIG Holdings investment company (2016 - 2018), Co-Founder & CSO of MSys Technologies. She was the Lead Blockchain Developer at BeyondTrust (2018 -2019) and also the Senior Software Engineer at InMobi (2015-2017), she also worked as a consultant on a part-time bases in many tech companies including Toptal as a Senior Software Engineer (2014-2015) and Darwin as a Project Manager (2018-2021).</p>
                        <p>Has more than 5 years of experience in Marketing in the Education, Communication, and Technology sectors. She used to be the CMO for the HetaChain project invested by Relam Investment Dubai. She has more than 4 years of experience as a COO for major companies in Vietnam & Internationally. Currently, she is a Co-Founder & COO of Netherlands-based HEAD Capital, a company specializing in investment and development of platform technology projects: Meta Elite Hunger Game-Fi Project. Mrs Harbin Lee is also an investor, and has sponsored and contributed to many competitions, many technology events, is a Diamond sponsor for Future Blockchain Summit 2018, and Malta Blockchain Summit 2018.</p>
                    </div>
                </div>

                <div className='row mb-5 align-items-center'>
                    <div className='col-md-3'>
                        <img src={team2} className='img-fluid' />
                    </div>
                    <div className='col-md-9'>
                        <h3 className='token-title mb-3'><b style={{ color: "#D09821" }}>Alex Livinenko - Director of Systems Operations</b></h3>
                        <p>With over 5 years of experience in the Finance and Real Estate industry, Mr. Alex holds knowledge that is widely extended in the field of Blockchain, E-Commerce, and Investment. Formerly developing the successes of 150 hotels within the 7S Hotel franchise, he co-founded and was the CCO of the chain. Currently, he leads the growth of MEHG Game-Fi development as well as accompanying HEAD COO with his role being in the BOD and Director of Systems Operations.</p>
                    </div>
                </div>

                <div className='row mb-5 align-items-center'>
                    <div className='col-md-3'>
                        <img src={team3} className='img-fluid' />
                    </div>
                    <div className='col-md-9'>
                        <h3 className='token-title mb-3'><b style={{ color: "#D09821" }}>Steve Bialkoski - Technical Director</b></h3>
                        <p>Mr. Steve Bialkoski achieved a Master of Business in London, he's currently a senior academic manager at a private international university in Netherlands. With his 8 years of knowledge and experience, Mr. Steve's an expert in the fields of Education, Hospitality, Technology, Entrepreneurship, he is also a Co-Founder & CCO of Netherlands-based HEAD Capital, a company specializing in investment and development of platform technology projects: Meta Elite Hunger Game-Fi Project.</p>
                    </div>
                </div>

                <div className='row mb-5 align-items-center'>
                    <div className='col-md-3'>
                        <img src={team4} className='img-fluid' />
                    </div>
                    <div className='col-md-9'>
                        <h3 className='token-title mb-3'><b style={{ color: "#D09821" }}>Benjamin Scherr - Marketing Director</b></h3>
                        <p>Mr Benjamin Scherr has more than 7 years of experience in Marketing in the Education, Communication, and Technology sectors, aslo an advanced knowledge in cyber security. Finished from the university of Maryland (2015-2019), He used to be the CMO for the HetaChain project invested by Relam Investment Dubai. He has more than 4 years of experience as a COO for major companies in Vietnam & Internationally. Currently, He is a Co-Founder & COO of Netherlands-based HEAD Capital, a company specializing in investment and development of platform technology projects: Meta Elite Hunger Game-Fi Project.</p>
                    </div>
                </div>

                <hr className='game-title' />
                <p><br /></p>

                <div className='row mb-5'>
                    <div className='col-md-3 text-center'>
                        <img src={g1} className='img-fluid' />
                        <h3 className='token-title mb-3'><b style={{ color: "#D09821" }}>Mark Cuban - Full Stack Developer</b></h3>
                    </div>
                    <div className='col-md-3 text-center'>
                        <img src={g2} className='img-fluid' />
                        <h3 className='token-title mb-3'><b style={{ color: "#D09821" }}>Brent Washington - 3D Developer/Web Developer</b></h3>
                    </div>
                    <div className='col-md-3 text-center'>
                        <img src={g3} className='img-fluid' />
                        <h3 className='token-title mb-3'><b style={{ color: "#D09821" }}>Saral Desai - Blockchain Engineer</b></h3>
                    </div>
                    <div className='col-md-3 text-center'>
                        <img src={g4} className='img-fluid' />
                        <h3 className='token-title mb-3'><b style={{ color: "#D09821" }}>Tony Robbins - Lead Gameplay</b></h3>
                    </div>
                </div>

                <hr className='artist-title' />
                <p><br /></p>

                <div className='row justify-content-center mb-5'>
                    <div className='col-md-4 text-center'>
                        <img src={a1} className='img-fluid' />
                        <h3 className='token-title mb-3'><b style={{ color: "#D09821" }}>Lisa Barnett - VFX Game Designer</b></h3>
                    </div>
                    <div className='col-md-4 text-center'>
                        <img src={a2} className='img-fluid' />
                        <h3 className='token-title mb-3'><b style={{ color: "#D09821" }}>Sara Lopez - Scripting and 3D Character</b></h3>
                    </div>
                </div>

                <hr className='marketing-title' />
                <p><br /></p>

                <div className='row justify-content-center mb-5'>
                    <div className='col-md-4 text-center'>
                        <img src={s1} className='img-fluid' />
                        <h3 className='token-title mb-3'><b style={{ color: "#D09821" }}>Ryan Belcak - Ast Marketing Executive</b></h3>
                    </div>
                    <div className='col-md-4 text-center'>
                        <img src={s2} className='img-fluid' />
                        <h3 className='token-title mb-3'><b style={{ color: "#D09821" }}>Harry Golden - Sound Designer</b></h3>
                    </div>
                </div>
            </div>
            <Player url="https://file-examples.com/storage/fe31d99e526255e059c5846/2017/11/file_example_MP3_700KB.mp3" />

        </section>
        
        <img src={Bottom} className="img-fluid bg-bottom" />
    </>;
}

export default About;