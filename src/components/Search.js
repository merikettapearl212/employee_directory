import React from "react";

function Search(props) {
  return (
    
    <form class="form-inline">
    <div className="form-group col-md-6">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control shadow"
          placeholder="Search for employees"
          id="search"
          
        />
        
        <button onClick={props.handleFormSubmit} className="btn btn-info shadow">
          Search
        </button>

       
      </div>
  </form>
  );
}

export default Search;