function Partner(props) {
    return <div className='col-md-3 mt-3'>
        <div className="container partner-img" >
            <img src={props.img}/>
        </div>
    </div>;
}

export default Partner;