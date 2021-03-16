import Container from "./Container";

function Card({users}) {
    return (
    <Container>
    <div className="search-results">
        {users.map(users => (
          <div key={users.login.uuid}>
            <div className="list-group-item">
              <img
                alt={`${users.name.first} ${users.name.last}`}
                src={users.picture.large}
                className="img-fluid"
              />
              <h2>{`${users.name.first} ${users.name.last}`}</h2>
              <p>Age: {users.dob.age}</p>
              <p>Email: {users.email}</p>
              <p>Phone: {users.phone}</p>
              <p>Preferred Title: {users.name.title}</p>
            </div>
          </div>
        ))}
      </div>
      </Container>
      
    );
  };
   
        

export default Card;