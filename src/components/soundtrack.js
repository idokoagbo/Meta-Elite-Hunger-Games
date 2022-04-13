import { useState, useEffect } from "react";

const useAudio = url => {

    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? document.getElementById("soundTrack").play() : document.getElementById("soundTrack").pause();
    },
        [playing]
    );

    return [playing, toggle];
};

const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (
        <div style={{background: 'transparent', bottom: 5, left: 5, position: 'fixed', zIndex: '10000'}}>
            <audio id="soundTrack" autoPlay>
                <source src={url} type="audio/mpeg" />
            </audio>
            <button onClick={toggle} className="btn btn-outline-dark" style={{borderColor: '#D09821', color: '#D09821'}}>{playing ? "Stop Soundtrack" : "Play Soundtrack"}</button>
        </div>
    );
};

export default Player;