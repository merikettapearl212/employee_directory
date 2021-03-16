import Container from "./Container";

function Header(props){
    return (
        <div className="jumbotron text-white font-weight-bold" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            {props.children}
            <Container>
            <h1 className="display-4 font-weight-bold">Employee Directory</h1>
            <p className="lead">Search for employees information, build your dream team today.</p>
            {/* <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
            
            </Container>
        </div>
        )     
}

export default Header;