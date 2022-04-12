import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/App.css';
import Nav from '../components/nav';
import logo from '../assets/logo.png';
import Top from '../assets/backgrounds/top.png';
import Bottom from '../assets/backgrounds/bottom.png';

function Gallery() {
    return <>
        <Nav logo={logo} />
        <img src={Top} className="img-fluid bg-top" />
        <section className='character-area'>
            <div className='container text-center'>
                <hr className='gallery-title' />
            </div>

        </section>
        <img src={Bottom} className="img-fluid bg-bottom" />
    </>;
}

export default Gallery;