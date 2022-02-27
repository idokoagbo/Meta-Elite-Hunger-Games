import 'bootstrap/dist/css/bootstrap.min.css';

function Character(props) {
    return <div className="row">
        <div className="col-md-8">
            <p>{props.description}</p>
        </div>
        <div className='col-md-4'>
            <img src={props.image} className='img-circle img-fluid' />
        </div>
    </div>;
}

export default Character;