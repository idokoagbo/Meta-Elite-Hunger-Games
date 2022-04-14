import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/App.css';
import Nav from '../components/nav';
import logo from '../assets/logo.png';
import Top from '../assets/backgrounds/top.png';
import Bottom from '../assets/backgrounds/bottom.png';
import Modal from "react-bootstrap/Modal";
import Player from '../components/soundtrack';

// gallery imgs

import gallery1 from '../assets/characters/1.png';
import gallery2 from '../assets/characters/2.png';
import gallery3 from '../assets/characters/3.png';
import gallery4 from '../assets/characters/4.png';
import gallery5 from '../assets/player.png';
import gallery6 from '../assets/gallery/6.png';
import gallery7 from '../assets/gallery/7.png';
import gallery8 from '../assets/gallery/8.png';
import gallery9 from '../assets/gallery/9.png';
import gallery10 from '../assets/gallery/10.png';
import gallery11 from '../assets/gallery/11.png';
import gallery12 from '../assets/gallery/12.png';
import gallery13 from '../assets/gallery/13.png';
import gallery14 from '../assets/gallery/14.png';
import gallery15 from '../assets/gallery/15.png';
import gallery16 from '../assets/gallery/16.png';
import gallery17 from '../assets/gallery/17.png';
import gallery18 from '../assets/gallery/18.png';
import gallery19 from '../assets/gallery/19.png';
import gallery20 from '../assets/gallery/20.png';
import gallery21 from '../assets/gallery/21.png';
import gallery22 from '../assets/gallery/22.png';
import gallery23 from '../assets/gallery/23.png';
import gallery24 from '../assets/gallery/24.png';
import gallery25 from '../assets/gallery/25.png';
import gallery26 from '../assets/gallery/26.png';
import gallery27 from '../assets/gallery/27.png';
import gallery28 from '../assets/gallery/28.png';
import gallery29 from '../assets/gallery/29.png';
import gallery30 from '../assets/gallery/30.png';
import gallery31 from '../assets/gallery/1.png';
import gallery32 from '../assets/gallery/2.png';
import gallery33 from '../assets/gallery/3.png';
import gallery34 from '../assets/gallery/4.png';
import gallery35 from '../assets/gallery/5.png';

function Gallery() {

    const [show, setShow] = useState(false);
    const [currentDesign, setDesign] = useState(null);

    const selectDesign = (value) => {
        setDesign(value);
        handleShow();
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const images = [
        gallery1, gallery2, gallery3, gallery4, gallery5, gallery30, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12,
        gallery13, gallery14, gallery15, gallery16, gallery17, gallery18, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24,
        gallery25, gallery26, gallery27, gallery28, gallery29, gallery31, gallery32, gallery33, gallery34, gallery35,
    ];

    return <>
        <Nav logo={logo} />
        <img src={Top} className="img-fluid bg-top" />
        <section className='character-area mb-5'>
            <div className='container text-center mt-5'>
                <hr className='gallery-title' />

                <div className='row mt-5'>
                    {
                        images.map((image, key) => {
                            return <div className='col-md-4 mb-3'>
                                <a href='#' onClick={() => selectDesign(image)}>
                                    {
                                        key % 2 === 0
                                            ? <img src={image} className="img-fluid" style={{ float: 'right' }} />
                                            : <img src={image} className="img-fluid" />
                                    }
                                </a>
                            </div>
                        })
                    }
                </div>
            </div>
            <Player url="https://file-examples.com/storage/fe31d99e526255e059c5846/2017/11/file_example_MP3_700KB.mp3" />
        </section>
        <img src={Bottom} className="img-fluid bg-bottom" />
        <Modal
            show={show}
            size="lg"
            animation={true}
            onHide={handleClose}
            centered
        >
            <Modal.Body>
                <center className="mt-5">
                    <img src={currentDesign} className="img-fluid" />
                </center>
            </Modal.Body>
        </Modal>
    </>;
}

export default Gallery;