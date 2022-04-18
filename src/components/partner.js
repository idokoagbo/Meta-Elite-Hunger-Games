function Partner(props) {
    return <div className='col-md-3 mt-3 animate__animated animate__fadeInLeft animate__delay-5s animate__slow'>
        <div className="container partner-img" >
            <img src={props.img}/>
        </div>
    </div>;
}

export default Partner;