import Particles from 'react-tsparticles';
import particleConfig from '../assets/particles.config.json';


function Hero() {
    return <Particles
        id="tsparticles"
        options={particleConfig}
    />;
}

export default Hero;