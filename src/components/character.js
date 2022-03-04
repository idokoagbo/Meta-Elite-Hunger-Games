import 'bootstrap/dist/css/bootstrap.min.css';

function Character(props) {
    return <div className='col'>
        <div className="card bg-dark text-white">
            <img className="card-img character-img" src={props.img} alt="Card image" />
            <div className="card-footer">
                <h4 className="card-title text-center">{props.title}</h4>
            </div>
        </div>
    </div>;
}

export default Character;